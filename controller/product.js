const fs = require('fs');

// Importing the Product Model from 'model' folder
// const model = require('../model/product');
// const Product = model.Product;

// Shortcut way of importing the Product Model from 'model' folder in one line
const { Product } = require('../model/product');


// CREATE
exports.createProduct = (req, res) => {
    // Creating a product object from the request's body
    const product = new Product(req.body);

    // Saving the product object into database
    product.save()
    .then(savedDocument => {
        console.log("~ Created a product!");
        res.status(201).json(savedDocument);
    })
    .catch(err => {
        res.status(400).json(err);
    });
}


// RETRIEVE ALL
exports.getAllProducts = async (req, res) => {
    try{
        // Retrieving all products by .find() method of Core MongoDB
        const allProducts = await Product.find();
        console.log("~ Retrieved all products!");
        res.status(200).json(allProducts);
    }
    catch(err) {
        res.status(400).json(err);
    }
}


// RETRIEVE ONE
exports.getOneProduct = async (req, res) => {
    // Retrieving ID from request parameter
    const id = req.params.id;

    try{
        // Finding product by that ID
        const product = await Product.findById(id);
        console.log("~ Retrieved a product!");
        res.status(200).json(product);
    }
    catch(err) {
        res.status(400).json(err);
    }
}


// REPLACE
exports.replaceProduct = async (req, res) => {
    // Retrieving ID from request parameter
    const id = req.params.id;

    try{
        // Replacing product by finding it by ID
        // Object will be replaced by request.body
        // {new:true} means return the object after updation
        const product = await Product.findOneAndReplace({_id:id}, req.body, {new:true});
        console.log("~ Replaced a product!");
        res.status(200).json(product);
    }
    catch(err){
        res.status(400).json(err);
    }
}


// UPDATE
exports.updateProduct = async (req, res) => {
    // Retrieving ID from request parameter
    const id = req.params.id;

    try{
        // Updating product by finding it by ID
        // Object will be updated and content in request.body will be added to the object
        // {new:true} means return the object after updation
        const product = await Product.findOneAndUpdate({_id:id}, req.body, {new:true});
        console.log("~ Updated a product!");
        res.status(200).json(product);
    }
    catch(err){
        res.status(400).json(err);
    }
}


// DELETE
exports.deleteProduct = async (req, res) => {
    // Retrieving ID from request parameter
    const id = req.params.id;

    try{
        // Deleting product by finding it by ID
        const product = await Product.findOneAndDelete({_id:id});
        console.log("~ Deleted a product!");
        res.status(200).json(product);
    }
    catch(err){
        res.status(400).json(err);
    }
}