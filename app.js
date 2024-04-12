import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Rutas
import catRoutes from './src/routes/catalogos.busquedas.routes.js';
import ScheduleRoutes from './src/routes/schedule.routes';

// Base de datos
import { Connection } from './src/database/mysql.database.js';

// Swagger

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swagger.options.js';

dotenv.config();

const App = {
	main: async () => {
		const app = express();
		const PORT = process.env.PORT || 3000;

		// Middlewares
		app.use(cors());
		app.use(express.json());
		app.use(morgan('dev'));

		// Swagger
		const specs = swaggerJsDoc(options);
		app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

		// Rutas
		app.use('/api/v1/schedule', ScheduleRoutes);

		app.use('/api/v1/catalogo', catRoutes);
		app.use('/api/v1/test', (req, res) => {
			res.status(200).json({ message: 'Test' });
		});
		app.use('/', (req, res) => {
			res.status(404).json({ message: 'Request not found' });
		});

		async function connectDatabase() {
			try {
				await Connection.authenticate();
				console.log('[OK] Conexión establecida con la base de datos');
			} catch (error) {
				console.error(
					'[ERROR] No se pudo conectar con la base de datos ',
					error,
				);
			}
		}

		function handleError(err, req, res, next) {
			console.error(err);
			res.status(500).json({ error: 'Error interno del servidor' });
		}

		// Middleware para manejo de errores
		app.use((err, req, res, next) => {
			console.error(err);
			res.status(500).send('[ERROR] Ocurrió un error en el servidor');
		});

		async function startServer() {
			await connectDatabase();
			app.use(handleError);
			app.listen(PORT, () => {
				console.log(
					`[Vue-API] se ejecuta en monorail.proxy.rlwy.net:24620 en el puerto ${PORT}`,
				);
			});
		}

		startServer();
	},
};

export default App;
