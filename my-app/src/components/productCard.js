import React from 'react';
import '../App.scss';

function productCard({ product:{ id, brand, name, price, compValue, rating, activeColor, colors } }) {
  const starWidth = ( rating / 5 ) * 100,
        ratingStarsEmpty = {
          width: `${starWidth}%`
        };

  colors.forEach(function(color){
    color.style = {
      backgroundColor: color.displayName
    };
    color.colorClass = "productColor";

    if(color.id === activeColor) {
      color.colorClass = "productColor selected"
    }
  });

  return (
    <div className='productCard'>
      <div className='imageHolder'>
        <img className='productImage' src={require(`../images/products/${id}.jpg`)} alt='shoe' />
      </div>
      <div className='productDetails'>
        <p className='productBrand'>{brand}</p>
        <p className='productName'>{name}</p>
        <p className='productPrice'>${price}</p>
        { compValue && 
          <p className='productCompVal'>Comp. value ${compValue}.00</p> }
        { rating &&
          <p className='productRating'>
            <span className='ratingStarsEmpty'>★★★★★</span>
            <span className='ratingStarsFill' style={ratingStarsEmpty}>★★★★★</span>
          </p> }
        <div class='productColors'>
          {colors.map((color) => {        
            return (<span className={color.colorClass} key={color.id}><button style={color.style}></button></span>)
          })}
        </div>  
      </div>
    </div>
  );
}

export default productCard;
