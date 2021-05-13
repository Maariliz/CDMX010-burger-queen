import React, {useState, useEffect} from 'react'
import {store} from './Config/firebase'

 function MenuContainer () {

// eslint-disable-next-line no-unused-vars
const [orden, setOrden] = useState([]);
/*const lunchMenu = {
  id: id,
  dish: dish,
  price: price,
  quatity: quantity,
  type1: type1,
  type2: type2,
  type3: type3,
}*/

const lunchMenu = () => {
    store.collection('lunch').add(lunchMenu);
}

useEffect(() => {
  const prevProducts = store.collection('lunch').onSnapshot((querySnapshot) => {
    let changes = snapshot.docChanges();
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
          // eslint-disable-next-line array-callback-return
          dishes.map((i) => {
            if(i.id === doc.data().id) {
              i.orden = true
            }
          })
      });

      setOrden(arr)
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// eslint-disable-next-line no-unused-vars
const [dishes, setDishes] = useState([
{
  id:1,
  dish:"Hamurguesa sencilla",
  type1:"res",
  type2:"pollo",
  type3:"vegertariana",
  price:10,
  cart:false,
  quantity:1,
},
{
  id:2,
  dish: "Hamburguesa doble",
  type1:"res",
  type2:"pollo",
  type3:"vegetariana",
  price:15,
  cart:false,
  quantity:1,
},
{
  id:3,
  dish:"Papas fritas",
  price:5,
  cart: false,
  quantity: 1,
},
{
  id:4,
  dish:"Aros de cebolla",
  price:5,
  cart:false,
  quantity:1,
},
{
  id:5,
  dish:"Agua 500ml",
  price:5,
  cart:false,
  quantity:1,
},
{
  id: 6,
  dish:"Agua 750ml",
  price:7,
  cart:false,
  quantity:1,
},
{
  id:7,
  dish:"Bebida/gaseosa 500ml",
  price:7,
  cart:false,
  quantity:1,
},
{
  id:8,
  dish:"Bebida/gaseosa 750ml",
  price:10,
  cart:false,
  quantity:1,
},
])


const addToOrder = async (item) => {

  dishes.forEach((i) => {
    if (i.id === item.id) {
        i.orden = true
    }
  })
  await store.collection('lunch').doc(`${item.id}`).get();
}

return (
    <div className="menuContainer">
      <div className="cardContainer">
        {dishes.map((item) => (
          <div className="unityCard" key={item.id}>
            <div className="dishCard" value={item.dish}>
              <div className="priceCard" value={item.price}>
                {
                item.cart === false
                &&
                <button className="btnAdd" onClick={() => addToOrder(item)}>
                  Agregar
                </button>
                }
                {
                  item.cart === true
                  &&
                <button className="btnAddToCart" onClick={() => addToOrder(item)}>
                  Agregado
                </button>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
   </div>
);
}

