import React, {createContext} from 'react';
import {store} from '../config/firebase';


export const ProductsContext = createContext ();

export class ProductsContextProvider extends React.Component {

  state = {
    products: []
  }

  componentDidMount(){
    const prevProducts = this.state.products;
    store.collection('Products').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
          prevProducts.push({
            ProductID: change.doc.id,
            ProductName: change.doc.data().ProductName,
            ProductPrice: change.doc.data().ProductPrice,
          })
        this.setState({
          products: prevProducts
        })
      })
    })
  }

  render(){
  return (
    <ProductsContext.Provider value={{products: [...this.state.products]}}>
        {this.props.children}
    </ProductsContext.Provider>
  )
  }
}
 export default ProductsContextProvider
