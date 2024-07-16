import {Request, Response, NextFunction} from "express";
import {AnyZodObject} from "zod";

const validate =
    (schema: AnyZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                });
                next();
            } catch (e: any) {
                next(e); // Pass the error to the next middleware (error handler)
            }
        };

export default validate;
