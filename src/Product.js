import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className='product'>
      
        <div className='product_info'>
        <p>The lean Startup</p>
        <p className='product_Price'>
        <small>$</small>
        <strong>19.99</strong>
        </p>
        <div className='product_rating'>
        <p>🌟</p>
        </div>
        </div>
        <img src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg' alt=''/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product