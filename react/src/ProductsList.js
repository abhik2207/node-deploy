import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('/products');
    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = async (id) => {
    const response = await axios.delete(`/products/${id}`);
    console.log(response.data);
    if (response.data._id) {
      setProducts(products.filter(prod => prod._id !== response.data._id));
    }
  }

  return (
    <>
      {products.map((product, index) => (
        <Product {...product} key={index} handleClick={handleClick}></Product>
      ))}
    </>
  )
}

export default ProductsList;
