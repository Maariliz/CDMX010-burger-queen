//import MenuContainer from './components/MenuContainer'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import { ProductsContextProvider } from './global/ProductsContext'
import AddProducts from './Components/AddProducts'
import './App.css';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Home from './Components/Home';
//import Kitchen from './Components/Kitchen';


function App() {
  return (
  <ProductsContextProvider>
    <CartContextProvider>
      <Router>
        <Switch>
          <Route path="/addProducts" component={AddProducts}/>
          <Route path="/home" component={Home}/>
          {/*<Route path="/kitchen" component={Kitchen}/>*/}
        </Switch>
      </Router>
    </CartContextProvider>
  </ProductsContextProvider>
  );
}

export default App;
