import React, { useContext } from 'react'
import Products from '../../Products';
import Product from './Product';
import './Shop.css';
import { ShopContext } from '../../context/ShopContext';

export const Shop = () => {
  const { filterItems } = useContext(ShopContext);
  console.log("filterItems",filterItems);
  return (
    <div className='shop'>
      <div className='shopTitle'>

      </div>
      <div className='products'>
        {""}
        {filterItems.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop;
