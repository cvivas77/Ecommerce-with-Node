const { Router } = require('express');
const {addProductToCart,
      getCart, getProductsInCart} = require('../controllers/cart.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

router.get('/', userExtractor, getCart);

router.get('/products', userExtractor, getProductsInCart);

router.post('/', userExtractor, addProductToCart);

module.exports = router;

/**
 * @openapi
 * /api/v1/cart/:
 *   get:
 *     summary: get user cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getCart'
 *       400:
 *         description: Error cart not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                    type: string
 *                    example: Error
 * /api/v1/cart/products/getProductsInCart:
 *   get:
 *     summary: Product in cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductsInCart'
 * /api/v1/cart/addProductToCart:
 *   post:
 *     summary: View of the products in the cart
 *     tags: [Cart]
 *     requestBody:
 *       description: OK
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProductInCart'
 *     responses:
 *       201:
 *         description: View of the products in the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product in cart
 */