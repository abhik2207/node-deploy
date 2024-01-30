const express = require('express');

// Importing Product controllers from Controller folder
const productController = require('../controller/product');

// Creating a Express Router for Products
const router = express.Router();

router
    .post('/', productController.createProduct)
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getOneProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

exports.routes = router;