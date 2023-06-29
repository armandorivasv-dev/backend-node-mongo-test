import { WSresponse } from "../libs/WSresponse.js";
import { producctService } from "../services/product.service.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await producctService.getAllProducts();

    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json(new WSresponse(null, "Error: Internal server error", true, 500));
  }
};

const createProduct = async (req, res) => {
  try {
    const response = await producctService.createProduct(req.body);
    res.json(new WSresponse(response, "product create", false, 0));
  } catch (error) {
    console.log("error", error);
    res.status(400).json(new WSresponse(null, error, true, 400));
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await producctService.getProductById(req.params.id);
    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res.status(460).json(new WSresponse(null, error, true, 460));
  }
};

const updateProduct = async (req, res) => {
  try {
    const response = await producctService.updateProduct(
      req.body,
      req.params.id
    );
    res.json(new WSresponse(response, "prodduct updated"));
  } catch (error) {
    console.log("error", error);
    res.status(489).json(new WSresponse(null, error, true, 489));
  }
};

const deleteProduct = async (req, res) => {
  try {
    const response = await producctService.deleteProduct(req.params.id);
    res.json(new WSresponse(response, "prodduct deleted"));
  } catch (error) {
    console.log("error", error);
    res.status(320).json(new WSresponse(null, error, true, 320));
  }
};

export default {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
