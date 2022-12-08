import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  function Home (){
        navigate('/')
    }

    function Training (){
        navigate('/trainingpage')
    }
  return (
    <div className = "header-container">
      <div className='Header'>
      <img 
          className='Header-logo'
          src={require('../pages/logo.jpg')}
          alt='logo' 
        />
        <div className = "header-buttons">
          <button className = "button" onClick = {Home}>HOME</button>
          <button className = "button" onClick = {Training}>TRAININGS</button>
        </div>
      </div>
    </div>
  )
}

export default Header;