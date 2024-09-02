"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const path_1 = __importDefault(require("path"));
exports.swaggerOptions = {
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
    apis: [path_1.default.join(__dirname, '../src/routes/*.js')],
};
