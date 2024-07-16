import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const errorResponseHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
        return res.status(400).send({
            status: "error",
            message: "Validation failed",
            details: err.errors.map((error) => ({
                path: error.path,
                message: error.message,
            })),
        });
    }

    // If the error is not a ZodError, pass it to the next error handler
    return res.send({
        status: "error",
        message: err.message,
    })
};

export default errorResponseHandler;
