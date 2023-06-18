import Header from './Components/Layout/header'
import React,{useState} from 'react';

import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

const App = () => {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    setCartIsShown(false);
  };




  return (
    <>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  )
}

export default App
