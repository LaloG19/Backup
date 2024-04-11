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
				url: 'https://backup-production-9704.up.railway.app',
			}

		],
	},
	apis: ['./src/routes/*.js'],
};
