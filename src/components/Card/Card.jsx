import React from "react";
import "./Card.css"

function Card({product}) {
    return (
        <div className="product-card" >
        <div className="product-cardbtns">
          <button className="product-cardbtns--category-button">
            {product?.category}
          </button>
          <button className="product-cardbtns--add-to-cart-button">
           
          </button>
        </div>
  
        <img
          className="product-cardimage"
          src={product?.imgUrl}
          alt={product?.name}
        />
        <h3 className="product-cardname">{product?.name}</h3>
  
        <div className="product-cardfooter">
          <div className="product-cardprice">
            <span className="product-cardoriginal-price">
              ${product?.oldPrice?.toFixed(2)}
            </span>
            <span className="product-card__discount-price">
              ${product?.newPrice?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    ) 
}
export default Card; 