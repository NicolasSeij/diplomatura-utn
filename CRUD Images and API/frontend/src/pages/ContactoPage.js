import React from 'react';
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
    return (

        <div>
            <div class="contact">
                <div class="contact-container">
                    <form action="" class="contact-form">
                        <div class="form-row">
                            <div class="form-input">
                                <label>Nombre:</label>
                                <input type="text" />
                            </div>
                            <div class="form-input">
                                <label>Apellido:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label>Email:</label>
                                <input type="text" />
                            </div>
                            <div class="form-input">
                                <label>Telefono:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <div class="form-input">
                                <label>Mensaje:</label>
                                <textarea type="text"></textarea>
                            </div>
                        </div>
                        <div class="form-submit">
                            <input type="submit" value="Enviar" class="boton" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactoPage;