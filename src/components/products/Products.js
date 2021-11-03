import React from 'react';
import './Products.css';

const Products = ({ productItems, handleAddProduct }) => {

    return (
        <div className="products">
            { productItems.map((productItem) => {
                return (
                    <div className="card" key={productItem.id}>
                        <div>
                            <img className="product_image" src={productItem.image} alt={productItem.name} />
                        </div>
                        <div className="product_name">
                            <h3>{productItem.name}</h3>
                        </div>
                        <div className="product_price">${productItem.price}</div>
                        <div>
                            <button className="product_add_button" onClick={() => handleAddProduct(productItem)}>Add To Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
