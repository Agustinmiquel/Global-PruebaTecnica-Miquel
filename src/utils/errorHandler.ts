import { Request, Response } from "express";
import logs from "./logger";

export const errorHandler = (error:Error, req:Request, res:Response) => {
    logs.error(error.stack);
    res.status(500).json({message: 'Internal server error'});
}