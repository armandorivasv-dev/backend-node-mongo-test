import { productDao } from "../daos/product.dao.js";

const getAllProducts = async () => {
  const data = await productDao.getAllProducts();
  return data;
};

const createProduct = async ({ title, description, price }) => {
  if (typeof title !== "string") throw "title error type: must be string";
  if (typeof description !== "string")
    throw "description error type: must be string";
  if (typeof price !== "number") throw "price error type: must be number";

  const createdProduct = await productDao.createProduct({
    title,
    description,
    price,
  });
  return createdProduct;
};

const getProductById = async (productId) => {
  if (typeof productId !== "string")
    throw "ProductId error type: must be string";

  const product = await productDao.getProductById(productId);

  if (!product) throw "product id doesn't exist";

  return product;
};

const updateProduct = async ({ title, description, price }, productId) => {
  if (typeof title !== "string") throw "title error type: must be string";
  if (typeof description !== "string")
    throw "description error type: must be string";
  if (typeof price !== "number") throw "price error type: must be number";
  if (typeof productId !== "string")
    throw "ProductId error type: must be string";

  const updatedProduct = await productDao.updateProduct(
    { title, description, price },
    productId
  );
  return updatedProduct;
};

const deleteProduct = async (productId) => {
  if (typeof productId !== "string")
    throw "ProductId error type: must be string";
  await productDao.deleteProduct(productId);
};

export const producctService = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
