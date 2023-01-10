import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getCustomProducts,
} from "../controllers/products.controllers.js";

const router = Router();

router.post("/api/products", createProduct);
router.get("/api/products", getProducts);
router.get("/api/products/custom", getCustomProducts);
router.get("/api/products/:id", getProduct);
router.put("/api/products/:id", updateProduct);
router.delete("/api/products/:id", deleteProduct);

export default router;
