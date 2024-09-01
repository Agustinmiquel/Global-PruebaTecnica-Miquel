import * as dotenv from "dotenv";
dotenv.config();
import path from 'path';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios - Prueba Global', 
      version: '1.0.0',
      description: 'API de usuarios de Agustin',
    },
    servers: [
      {
        url: process.env.URL || 'http://localhost:3009',
        description: 'Servidor local'
      },
    ],
    tags:[
        {
            name: 'Users',
            description: 'Operaciones relacionadas con usuarios',
        }
    ]
  },
  apis: [`${path.join(__dirname, "../src/routes/*.js")}`, `${path.join(__dirname, '../src/models/*.js')}`],
};

