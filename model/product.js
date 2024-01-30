// Importing mongoose
const mongoose = require('mongoose');

// Importing Schema from Mongoose
const { Schema } = mongoose; 

// Creating a Schema
const productSchema = new Schema({
    title: {type: String, required:[true, 'Please provide a title for the product!'], unique:true}, // Title is of String type, It is required field and should be unique, An error message is provided too for both
    brand: {type: String, required:[true, 'Please provide a brand name for the product!']},
    description: {type:String, required:true},
    category: {type:String, required:true},
    price: {type: Number, min: [0, 'Price cannot be less than 0!'], required:[true, 'Please provide a price for the product!']}, // Checking minimum with an error message
    discountPercentage: {type: Number, min:0, max:80}, // Checking minimum and maximum values with no error message and type is Number
    rating: {type: Number, min: [0, 'Rating cannot be less than 0!'], max: [5, 'Rating cannot be greater than 5!'], default:0}, // Default value of rating is 0
    stock: {type: Number, min:0},
    thumbnail: {type:String, required:true}, // Thumbnail is required but there is no error message
    images: [ String ] // Defines an array of string

    // description: String, // Shorthand method only if we need to speicify just the type and nothing else
    // rating: Number, // Shorthand method only if we need to specify just the type and nothing else

    // NOTE: MONGOOSE PROVIDES A DEFAULT ERROR MESSAGE OF ITS OWN IF AN ERROR MESSAGE IS NOT PROVIDED
    // NOTE: UNIQUE IS NOT A VALIDATOR, IT IS A BUILT IN METHOD OF MONGOOSE, SO YOU CANNOT PROVIDE A ERROR MESSAGE FOR IT... EVEN IF YOU DO, RESPONSE WILL ONLY SHOW A DEFAULT ERROR WITH THE CODE 11000, WHICH IS CODE OF NOT UNIQUE VALUE PROVIDED
});


// Creating a Model from our Schema
const ProductModel = mongoose.model('Product', productSchema);

// Exporting the ProductModel as the name Product
exports.Product = ProductModel;

// Shortcut way to both create a model and export it in one line
// exports.Product = mongoose.model('Product', productSchema);
