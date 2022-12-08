import '../App.css';
import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = () => {

    return (
        <div className = 'container'>
            < Header />
            <div className = 'homepage-container'>
                <h1 className = 'title-container'>
                    WELCOME TO DICT Training Registration
                    Management
                </h1>
            <div className = 'body-container'>
                <h2>
                    DICT aspires for the Philippines 
                    to develop and flourish through innovation and constant development.
                </h2>

                <h3>
                    This website will provide individuals with technological opportunities. This free training will equip them with the necessary knowledge and skills that will surely upskill their career.
                </h3>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;