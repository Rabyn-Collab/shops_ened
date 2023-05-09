const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


const methodNotAllowed = (req, res) => res.status(405).json({ message: 'method not allowed' });


router.post('/api/product_create', productController.productAdd);
router.patch('/api/product_update/:id', productController.productUpdate);
router.delete('/api/product_remove/:id', productController.productRemove);
router.get('/api/all_product', productController.getAllProduct);
router.get('/api/productById/:id', productController.getProductById);


module.exports = router;