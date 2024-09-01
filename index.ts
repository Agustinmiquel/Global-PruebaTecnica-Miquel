import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import router from "./src/routes/userRoutes";
import logs from "./src/utils/logger";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./config/swagger";
dotenv.config();

const app = express();

const PORT = 3009;

app.use(bodyParser.json());

app.use("/", router);


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(swaggerOptions))
);

app.listen(PORT, () => {
  logs.info(`Puerto escuchandose en http://localhost:${PORT}`);
  logs.info(`Documentacion disponible en ${process.env.URL}/api-docs`)
});
