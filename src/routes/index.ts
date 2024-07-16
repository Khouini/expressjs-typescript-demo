import { Express } from "express";
import productRoutes from "./product.route";

function routes(app: Express) {
    /**
     * @openapi
     * /healthcheck:
     *  get:
     *     tags:
     *     - Healthcheck
     *     description: Responds if the app is up and running
     *     responses:
     *       200:
     *         description: App is up and running
     */
    app.get("/healthcheck", (req, res) => res.sendStatus(200));

    // Include product routes
    productRoutes(app);
}

export default routes;
