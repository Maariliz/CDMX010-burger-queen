import React, { useState, useContext } from 'react'
//import { auth, store } from '../Config/firebase'
import { CartContext } from '../Global/CartContext'
//import { Navbar } from './Navbar';
//import { useHistory } from 'react-router-dom'

const Kitchen = (props) => {

    //const history = useHistory();

    const {totalPrice,  totalQty, dispatch } = useContext(CartContext);

    // defining state

    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
}
