import React from 'react'
import {useHistory} from 'react-router-dom'

export default function MainContainer() {

  const history = useHistory();

  const handleBreakfastOption = () => {
    history.push('/')
  }

  const handleDinnerOption = () => {
    history.push('/home')
  }

  const handleAddProducts = () => {
    history.push('/addProducts')
  }


  return (
      <div className="menuMainContainer">
        <div className="backgroundContainerMenu">
        <div className="logoMainContainer">
          <img className="mainLogo" src='/img/bqueen.png' alt=""></img>
        </div>
        <div className="optionsMenuContainer">
        <div className="optionsMenu">
          <div onClick={handleBreakfastOption} className="breakfastMenu">
            <h3>Desayuno </h3>
            <p> de 8 am a 1 pm </p>
          </div>
          <div onClick={handleDinnerOption} className="dinnerMenu">
            <h3> Resto del día </h3>
            <p> de 1 pm a 8 am </p>
          </div>
          <div onClick={handleAddProducts} className="addProductsOption">
            <h3> Admin </h3>
          </div>
          </div>
        </div>
        </div>
      </div>
  )
}
