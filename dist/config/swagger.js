"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const path_1 = __importDefault(require("path"));
exports.swaggerOptions = {
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
        tags: [
            {
                name: 'Users',
                description: 'Operaciones relacionadas con usuarios',
            }
        ]
    },
    apis: [`${path_1.default.join(__dirname, "../src/routes/userRoutes.ts")}`, `${path_1.default.join(__dirname, '../src/models/Usuarios.ts')}`],
};
