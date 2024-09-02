import { NextFunction, Response, Request} from "express";
import logs from "./logger";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    logs.error(error.stack);
    res.status(500).json({message: 'Internal server error'});
}