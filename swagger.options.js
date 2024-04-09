export const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SOLVE',
			version: '9.9.9',
			description: 'Proyecto de Vue.js para la gestión de trabajadores',
		},
		servers: [

			{
				url: 'http://localhost:3000',
			}

		],
	},
	apis: ['./src/routes/*.js'],
};
