const ContactoPage = (props) => {

  return (
  
  <main className="holder contacto">
  
  <div>
  
  <h2>Contacto Rápido</h2> <form action="" method="" className="formulario">
  
  <p>
  
  <label for="nombre">Nombre</label> <input type="text" name="" />
  
  <label for="email">Email</label>
  
  <input type="text" name="" />
  
  <label for="telefono">Telefono</label>
  
  <input type="text" name="" />
  
  </p> <p>
  
  </p> <p>
  
  </p>
  
  <p>
  
  <label for="mensaje">Mensaje</label> <textarea name=""></textarea>
  
  </p> <p class="acciones"><input type="submit"
  
  value="Enviar" />

  </p>
  </form>
  </div>
  <div class="datos">
  <h2>Otras vias de comunicación</h2>
  <p>También puede contactarse con nosotros usando
  los siguintes medios</p> <li>Teléfono: 43242388</li>
  
  <ul>
  <li>Email: contacto@transportesx.com.ar</li>
  <li>Facebook:</li> <li>Twitter:</li>
  <li>Skype:</li> 
  </ul>
  </div>
  </main>

   );
  }
  
  
  
  export default ContactoPage;