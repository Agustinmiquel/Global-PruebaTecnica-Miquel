import path from 'path';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'Documentación de la API de Usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3009',
      },
    ],
  },
  apis: [path.join(__dirname, '../src/routes/*.js')], 
};
