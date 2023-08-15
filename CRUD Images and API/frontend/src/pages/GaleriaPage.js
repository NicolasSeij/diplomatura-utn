import React from 'react';
import "../styles/components/pages/GaleriaPage.css";
import mia from '../styles/components/img/mia.jpg'; 
import mora from '../styles/components/img/mora.jpg'; 



const GaleriaPage = (props) => {
    return (
        <main class="main">
        <div class="container">

            <div class="cuadrado">
                <img src={mia} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mora} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mia} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mora} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mia} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mora} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mia} alt="mia" />
            </div>

            <div class="cuadrado">
                <img src={mora} alt="mia" />
            </div>

        </div>
    </main>
    )
}

export default GaleriaPage;