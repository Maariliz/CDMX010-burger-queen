import React, {useState} from 'react'
import { store } from '../Config/firebase';

// import { store } from '../Config/firebase'

export default function AddProducts() {
const [productName, setProductName] = useState('');
const [productPrice, setProductPrice] = useState(0);
//const [productImg, setProductImg] = useState(null);
const [error, setError] = useState('');
//const types = ['image/png','image/svg'];
/*const productImgHandler =(e) => {
let selectedFile = e.target.files;
if (selectedFile && types.includes(selectedFile.type)){
setProductImg(selectedFile);
setError('')
}
else{
setProductImg(null);
setError('Please select a valid image type (png or svg)')
}
}*/
//add product form submit event
const addProduct = (e) => {
e.preventDefault(e);
//storing the image
/*const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
uploadTask.on('state_changed', snapshot => {
const progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
console.log(progress);
}, err => setError(err.message)
, () => {
//getting product url and if success then storing the product in databse. 'poduct-images' folder into storage
//storage.ref('product-images').child(productImg.name).getDownloadUrl().then(url => {*/
store.collection('Products').add({
  ProductName: productName,
  ProductPrice: Number(productPrice),
}).then(() => {
  setProductName('');
  setProductPrice(0);
//setProductImg('');
  setError('');
  //document.getElementById('file').value='';
}).catch(error => setError(error.message))
}

return (
<div className="addProductsContainer">
  <form className="addProductForm" onSubmit={addProduct}>
    <label className="nameProductText">Dish Name</label>
    <input type="text" className="nameProductInput" onChange={(e) => setProductName(e.target.value)} value={productName} />
    <label className="priceProductText">Dish Price</label>
    <input type="text" className="priceProductInput" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
    <label className="priceProductText">Dish Image</label>
    <input type="text" className="priceProductInput" />
    <button type="submit" className="btnAddProduct">Add Dish</button>
  </form>
  {error && <span className='errorForm'>{error}</span>}
</div>

)
}
