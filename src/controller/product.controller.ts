import { Request, Response } from "express";
import {
  CreateProductInput,
  UpdateProductInput,
} from "../schema/product.schema";
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct, getProducts,
} from "../service/product.service";

export async function createProductHandler(
    req: Request<{}, {}, CreateProductInput["body"]>,
    res: Response
) {
  const body = req.body;
  const product = createProduct(body);
  return res.send(product);
}

export async function updateProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
  const productId = req.params.productId;
  const update = req.body;
  const product = findProduct(productId);

  if (!product) {
    return res.sendStatus(404);
  }

  const updatedProduct = findAndUpdateProduct(productId, update);
  return res.send(updatedProduct);
}

export async function getProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
  const productId = req.params.productId;
  const product = findProduct(productId);

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}

export async function deleteProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
  const productId = req.params.productId;
  const product = findProduct(productId);

  if (!product) {
    return res.sendStatus(404);
  }

  deleteProduct(productId);
  return res.sendStatus(200);
}


export async function getAllProductsHandler(req: Request, res: Response) {
    const products = getProducts();
    return res.send(products);
}