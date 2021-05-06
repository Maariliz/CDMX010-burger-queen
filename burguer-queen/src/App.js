//import MenuContainer from './components/MenuContainer'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import { ProductsContextProvider } from './global/ProductsContext'
import AddProducts from './components/AddProducts'
import './App.css';
import ProductsContextProvider from './global/ProductsContext';
import CartContextProvider from './global/CartContext';
import Home from './components/Home';


function App() {
  return (
  <ProductsContextProvider>
    <CartContextProvider>
      <Router>
        <Switch>
          <Route path="/addProducts" component={AddProducts}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </Router>
    </CartContextProvider>
  </ProductsContextProvider>
  );
}

export default App;
