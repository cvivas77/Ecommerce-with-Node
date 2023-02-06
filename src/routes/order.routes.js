const { Router } = require('express');
const { gerOrders, makeOrder } = require('../controllers/orders.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

router.get('/', userExtractor, gerOrders);

router.put('/', userExtractor, makeOrder);

module.exports = router;

/**
 * @openapi
 * /api/v1/order:
 *   get:
 *     summary: View user Order
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/gerOrder'
 *       400:
 *         description: Error in process
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error in query
 * /api/v1/order/makeOrder:
 *   put:
 *     summary: delete product in order
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: order_id
 *     responses:
 *       200:
 *         description: Purchased
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Your order has been deleted
 *       400:
 *         description: Error validation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error validation
 */