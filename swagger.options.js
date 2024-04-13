export const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SOLVEXD1',
			version: '9.9.9',
			description: 'Proyecto de Vue.js para la gestión de trabajadoresXD1',
		},
		servers: [

			{
				url: 'https://backup-production-9704.up.railway.app',
			},
			{
				url: 'http://localhost:3000',
			}

		],
	},
	apis: ['./src/routes/*.js'],
};
