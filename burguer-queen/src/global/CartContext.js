import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext ()

export default function CartContextProvider (props){

    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, totalQty: 0})

    return (
        <CartContext.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

