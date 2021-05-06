import React, { useContext } from 'react';
import { ProductsContext } from '../global/ProductsContext';
import { CartContext } from '../global/CartContext';

export const Products = () => {

  const { products } = useContext(ProductsContext);

  const { dispatch } = useContext(CartContext);

  return (
    <div className="productsContainer">
      <span></span>
      {products.length !== 0 && <h1> Menu </h1>}
      <div className="cardContainer">
        {products.map(product => (
          <div className="productCard" key={product.ProductID}>
            <div className= "productName">
              {product.ProductName}
            </div>
            <div className="productPrice">
              $ {product.ProductPrice}.00
            </div>
            <div className="btnAddCart">
              <button className="btnAdd" onClick={() => dispatch({type:'ADD_TO_CART',id:product.ProductID, product })}>Agregar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
