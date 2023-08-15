import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <main class="main">
            <div class="container">
                <div class="row"></div>
                <div class="cubo ">
                    <div class="cubo-img">
                        <img src={imagen} alt="novedad" />
                    </div>
                    <div class="cubo-text">
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                        <div dangerouslySetInnerHTML={{ __html: body }} className="span" />
                    </div>
                </div>
            </div>
        </main>
    )
}





export default NovedadItem;