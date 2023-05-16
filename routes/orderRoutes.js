const express = require('express');
const router = express.Router();
const auth = require('../middleware/authRoute');
const orderController = require('../controllers/orderController');

const methodNotAllowed = (req, res) => res.status(405).json({ message: 'method not allowed' });



router.get('/api/getAllOrders', auth.checkAdmin, orderController.getAllOrder);
router.get('/api/order/:id', auth.checkUser, orderController.getOrderById);
router.post('/api/order_create', auth.checkUser, orderController.order_create);


module.exports = router;