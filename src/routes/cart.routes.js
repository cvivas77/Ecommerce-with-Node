const { Router } = require('express');
const {addProductToCart,
      getCart,
      getProductsInCart} = require('../controllers/cart.controller');
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
 *     sumary: get user cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cart
 *                 data:
 *                   type: object
 *                   properties:
 *                     products:
 *                       type: array
 *                     items:
 *                       type: array
 */