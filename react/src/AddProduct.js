import { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    setProduct({
      ...product, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product);
  }

  const addProduct = async (product) => {
    const res = await axios.post('/products', product);
    console.log(res.data);
  }

  return (
    <>
      <div id="addProductMain">
        <form id="myForm" onSubmit={handleSubmit}>
          <h1>Add a Product</h1>
          <div className="inputRow">
            <label className="myLabel" htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" placeholder="Brand" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="description">Description</label>
            <input type="text" id="description" name="description" placeholder="Description" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="category">Category</label>
            <input type="text" id="category" name="category" placeholder="Category" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="thumbnail">Thumbnail</label>
            <input type="text" id="thumbnail" name="thumbnail" placeholder="Thumbnail" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="price">Price</label>
            <input type="number" id="price" name="price" placeholder="Price" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="discountPercentage">Discount Percentage</label>
            <input type="number" step="0.01" id="discountPercentage" name="discountPercentage" placeholder="Discount %" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="rating">Rating</label>
            <input type="number" step="0.01" id="rating" name="rating" placeholder="(Out of 5)" className="myInput" onChange={handleChange} />
          </div>
          <div className="inputRow">
            <label className="myLabel" htmlFor="stock">Stock</label>
            <input type="number" id="stock" name="stock" placeholder="Available Stocks" className="myInput" onChange={handleChange} />
          </div>
          <button id="addButton" type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
