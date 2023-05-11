const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const auth = require('../middleware/authRoute');
const checkFile = require('../middleware/fileCheck');

const methodNotAllowed = (req, res) => res.status(405).json({ message: 'method not allowed' });


router.post('/api/product_create', auth.checkAdmin, checkFile.fileCheck, productController.productAdd);

router.patch('/api/product_update/:id', auth.checkAdmin, productController.productUpdate);
router.delete('/api/product_remove/:id', auth.checkAdmin, productController.productRemove);

router.get('/api/all_product', productController.getAllProduct);

router.get('/api/productById/:id', productController.getProductById);


module.exports = router;