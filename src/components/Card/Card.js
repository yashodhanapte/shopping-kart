import React from 'react'
import './Card.css';

const Card = ({productInfo,handleClick}) => {
    return (
        <div className="card-container" onClick={()=>handleClick(productInfo)}>
            <div className="card-img-container">
                <img className="card-img" src={productInfo.imgUrl} alt="item"/>
            </div>
            <div className="card-title">
                <p id="product-name">{productInfo.productName}</p>
                <p id="product-price">{productInfo.currency}{productInfo.price}</p>
            </div>
        </div>
    )
}

export default Card
