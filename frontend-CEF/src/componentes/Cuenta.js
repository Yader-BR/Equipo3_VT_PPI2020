import React from 'react'
import '../estilos/cuenta.css';
function Cuenta (){
return (
  <>
  <div className="body">
  <h1 className="titulo">Iniciar Sesion</h1>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1" className="cuenta">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="abajo" >We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="cuenta">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="abajo" for="exampleCheck1">Check me out</label>
  </div>
  
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <a href="https://jd51c.csb.app/bienvenidos" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Siguiente</a> 
<a href="https://jd51c.csb.app/#carouselExampleFade/cuenta" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Atras</a>

</form>
</div>


  </>

)
}
export default Cuenta;