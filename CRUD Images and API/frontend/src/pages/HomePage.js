import React from 'react';
import "../styles/components/pages/HomePage.css";
import logo from '../styles/components/img/logo.png'; 

const HomePage = (props) => {
    return (
        <div className="main-banner">
            <div className="banner-body">
                <div className="banner-body_container">
                    <div className="banner-img">
                        <img className="brillo" src={logo} alt="" />
                    </div>
                    <div className="banner-text">
                        <h3>¡Bienvenidos!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam iste tempora eos,
                            assumenda repudiandae maiores excepturi asperiores delectus pariatur repellat saepe cum quam
                            autem quae! Enim sapiente excepturi quis?</p>
                        <div className="banner-button">
                            <button href="servicios.html" className="boton">Servicios</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;