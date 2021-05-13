import React, {useContext} from 'react'
import { CartContext } from '../Global/CartContext';
//import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//import { Icon } from '@iconify/react';
//import plusCircle from '@iconify-icons/bi/plus-circle';
//import removeCircle from '@iconify-icons/ion/remove-circle';
//import closeCircleOutline from '@iconify-icons/mdi/close-circle-outline';
//import { auth } from '../config/firebase';
//import { home } from '../components/Home';
//import { products } from '../components/Home';

const Cart = () => {

  toast.configure()

  const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
  //const history = useHistory();

return (
  <div className="cartContainer">
      <div className="logoContainer">
        <img className="logoBurgerQueen" src='/img/bqueen.png' alt="burgerQueen"></img>
      </div>
       <div className="orderContainer">
            {shoppingCart.length !== 0 && <h2>Orden</h2>}
            {
            shoppingCart.leght === 0 &&
                toast.warning(' No olvides agregar alimentos a la orden',{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            }
            {shoppingCart && shoppingCart.map(cart => (
                <div className="cartCard" key={cart.ProductID}>
                    <div className="cartName"> {cart.ProductName }</div>
                    <div className="cardPriceOriginal">Precio Unitario:$ {cart.ProductPrice}.00 </div>
                    <div className="cartPrice"> Subtotal ${cart.TotalProductPrice}.00  </div>
                      <div className="incAndDec">
                        <img className="inc" src='/img/add.svg' alt="" onClick={() => dispatch ({ type: 'INC', id: cart.ProductID, cart})}></img>
                        <div className="quantity">{cart.qty}</div>
                        <img className="dec" src='/img/minus.svg' alt="" onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart})}></img>
                    </div>
                    <img className="deleteBtn" src='/img/trash.svg' alt="" onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart})}></img>
                </div>
            ))
            }
        {/*{shoppingCart.lenght = 0 &&*/}
        <div className='cartSummary'>
          <div className="cartSummaryHeading">
            Resumen de la Orden
          </div>
          <div className="cartSummaryPrice">
              <span>Precio Total:  </span>
              <span>$ {totalPrice}.00</span>
          </div>
          <div className="cartSummaryQty">
            <span>Cantidad Total: </span>
            <span>{totalQty}</span>
          </div>
          <button className="sendKitchen">
            Enviar a Cocina
          </button>
        </div>
    </div>
</div>

  )
        }


export default Cart;
