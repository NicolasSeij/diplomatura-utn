import React from 'react';
import "../styles/components/pages/NosotrosPage.css";
import yo from '../styles/components/img/yo.jpg'; 



const NosotrosPage = (props) => {
    return (
        <main className="main">
        <div className="container">

            <div className="cuadro">
                <div className="cuadro-img">
                    <img src={yo} alt="nosotros" />
                </div>
                <div className="cuadro-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil deleniti, ipsum sunt sequi laboriosam? Vel, quisquam dignissimos debitis eum saepe nisi explicabo nostrum distinctio, aperiam dicta pariatur eveniet cumque.</p>
                </div>
            </div>

            <div className="cuadro">
                <div className="cuadro-img">
                    <img src={yo} alt="nosotros" />
                </div>
                <div className="cuadro-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil deleniti, ipsum sunt sequi laboriosam? Vel, quisquam dignissimos debitis eum saepe nisi explicabo nostrum distinctio, aperiam dicta pariatur eveniet cumque.</p>
                </div>
            </div>

            <div className="cuadro">
                <div className="cuadro-img">
                    <img src={yo} alt="nosotros" />
                </div>
                <div className="cuadro-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil deleniti, ipsum sunt sequi laboriosam? Vel, quisquam dignissimos debitis eum saepe nisi explicabo nostrum distinctio, aperiam dicta pariatur eveniet cumque.</p>
                </div>
            </div>

        </div>
    </main>
    )
}

export default NosotrosPage;