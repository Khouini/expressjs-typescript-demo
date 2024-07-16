import {Express} from "express";
import {
    createProductHandler,
    getProductHandler,
    updateProductHandler,
    deleteProductHandler,
    getAllProductsHandler
} from "../controller/product.controller";
import validateResource from "../middleware/validateResource";
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema,
} from "../schema/product.schema";

function productRoutes(app: Express) {
    app.post(
        "/api/products",
        [validateResource(createProductSchema)],
        createProductHandler
    );

    app.put(
        "/api/products/:productId",
        [validateResource(updateProductSchema)],
        updateProductHandler
    );

    app.get(
        "/api/products/:productId",
        validateResource(getProductSchema),
        getProductHandler
    );

    app.delete(
        "/api/products/:productId",
        [validateResource(deleteProductSchema)],
        deleteProductHandler
    );

    app.get("/api/products", getAllProductsHandler);
}

export default productRoutes;
