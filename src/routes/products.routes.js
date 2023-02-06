const { Router } = require('express');
const {getAllProducts, createProduct} = require('../controllers/products.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

router.get('/', getAllProducts);

router.post('/', userExtractor, createProduct);

module.exports = router;

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     summary: Get All Products
 *     description:
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Info of products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getAllProducts'
 *       400:
 *         description: Something wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Request error
 * /api/v1/createProduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: create product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createProduct'
 *     responses:
 *       201:
 *         description: Creating a product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product create
 */