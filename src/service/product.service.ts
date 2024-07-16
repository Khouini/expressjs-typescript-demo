import { Product, products } from "../models/product.model";
import { ProductInput } from "../models/product.model";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export function createProduct(input: ProductInput): Product {
  const newProduct: Product = {
    productId: `product_${nanoid()}`,
    ...input,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  products.push(newProduct);
  return newProduct;
}

export function findProduct(productId: string): Product | undefined {
  return products.find((product) => product.productId === productId);
}

export function findAndUpdateProduct(
    productId: string,
    update: Partial<ProductInput>
): Product | undefined {
  const product = findProduct(productId);

  if (!product) {
    return undefined;
  }

  const updatedProduct = { ...product, ...update, updatedAt: new Date() };
  const index = products.findIndex((p) => p.productId === productId);
  products[index] = updatedProduct;

  return updatedProduct;
}

export function deleteProduct(productId: string): boolean {
  const index = products.findIndex((product) => product.productId === productId);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);
  return true;
}

export function getProducts(): Product[] {
  return products;
}