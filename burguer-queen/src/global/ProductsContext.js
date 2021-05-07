import React, {createContext} from 'react';
import {store} from '../config/firebase';


export const ProductsContext = createContext ();

/*function ProductsContextProvider () {

const [order, setOrder] = useState([]);

const getMenu = () => {
  store.collection('Products').onSnapshot(snapshot => {
    const changes = ['productos'];
    querySnapshot.forEach((change) => {
    changes.push({...change.data(), id: change.id})
  })
  setOrder(change);
});
};
 useEffect(() => {
getMenu();
 }, []);*/

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
