import { Router } from "express";
import { productController } from "../controllers/index.js";
import userChecker from "../middlewares/userChecker.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
