import React from 'react';
import { useNavigate } from "react-router-dom";

import Footer from '../components/Footer'


const Trainingpage = () => {

    const navigate = useNavigate();

    function Register (){
        navigate('/trainee')
    }

    return(
        <div>
            <div className = 'training-container'>
                <div className = 'sample-training-container'>
                    <img 
                        className = 'image-container'
                        src = {require('../pages/training-image.jpg')}
                        alt = 'logo'
                    />
                    <br />
                    <button
                        className = 'button'
                        onClick = {Register}
                        >REGISTER
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Trainingpage;