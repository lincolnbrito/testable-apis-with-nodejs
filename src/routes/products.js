import express from 'express';
import ProductsController from '../controllers/ProductsController';

const router = express.Router();
const productsController = new ProductsController();

router.get('/', (req, res) => productsController.get(req, res));

export default router;