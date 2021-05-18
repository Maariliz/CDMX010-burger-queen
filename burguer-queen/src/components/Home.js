import React from 'react';
//import {useHistory} from 'react-router-dom';
//mport { auth } from '../config/firebase';
import Products from './Products';
import Cart from './Cart';
//import Navbar from './Navbar';
//Cuando realicemos autenticacion senialar {user} como prop
export default function Home ()  {

  /*const history = useHistory();

  useEffect(() => {
    //forcing user to signup
    auth.onAuthStateChanged(user => {
      if(!user) {
        history.push('/menuContainer');
      }
    })
  })*/

    return (
      <div className="backgroundContainer">
        <div className="backgroundContainerHome"></div>
 {/* /*<img className="logoBurgerQueen" src='/img/wall.jpg' alt="burgerQueen"></img> */}
        <div className='homeContainer'>
            {/* <Navbar /> Al realizar autenticacion colocar en navbar user = {user} */}
            <Products/>
            <Cart />
        </div>
      </div>
    )
}
