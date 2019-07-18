import React from 'react';
import ProductCard from '../components/productCard'
import { products } from '../products';

function productCardContainer() {
  return (
    <div className='productCardContainer'>
        {products.map((product, index) => {        
          return <ProductCard
            key={index} 
            product={product}
          />
        })}        
    </div>    
  );
}

export default productCardContainer;