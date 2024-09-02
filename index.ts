import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import router from "./src/routes/userRoutes";
import logs from "./src/utils/logger";
import { swaggerOptions } from "./config/swagger";
import { errorHandler } from "./src/utils/errorHandler";

dotenv.config();

const app = express();

const PORT = 3009;

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/users", router);

app.use(errorHandler);

app.listen(PORT, () => {
  logs.info(`Puerto escuchandose en http://localhost:${PORT}`);
  logs.info(`Documentacion disponible en ${process.env.URL}/api-docs`)
});
