import './Product.css';

const Product = ({ _id, brand, title, thumbnail, price, discountPercentage, rating, stock, handleClick }) => {
  return (
    <>
      <div id="main">
        <div id="card">
          <div id="image-div">
            <div id="delete">
              <i className="fa fa-solid fa-trash" onClick={() => handleClick(_id)} />
            </div>
            <div id="discount">
              <p>{discountPercentage}% off</p>
            </div>
            <img id="cover-pic" src={thumbnail} alt="cover pic"/>
          </div>
          <div id="upper-div">
            <div id="product-name">
              <h1>{title}</h1>
              <h3>{brand}</h3>
            </div>
            <div id="product-price">
              <h3>$ {price}</h3>
            </div>
          </div>
          <div id="lower-div">
            <div id="rating-div">
              <i className="fa fa-regular fa-star"></i>
              <h5>{rating}/5</h5>
            </div>
            <div id="buy-div">
              <button id="buy">Buy</button>
              <h6>{stock} left</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
