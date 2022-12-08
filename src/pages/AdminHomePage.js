import React from 'react';
import {useNavigate} from 'react-router-dom';

const AdminHomePage = () => {

    const navigate = useNavigate();
    
    function handleClickLogin (){
        navigate('/admin-login-page')
    }

    function handleClickRegister (){
        navigate('/admin-registration-page')
    }

    return (
     <>
      <div className='button-container'>
        <div  className= 'btn-text'><p>WELCOME!</p></div>
        <button className='btn' onClick={handleClickLogin}>LOGIN</button> <br />
        <button className='btn' onClick={handleClickRegister}>REGISTER</button>
      </div>
     </>
    )
  }
  
export default AdminHomePage;