import React from 'react'
import '../estilos/Crea.css';

function Crear () {
return(
<>
<div className="body">
<h1 className="Titulo"> CREAR CUENTA</h1>
<br></br>
<form className="Crea">
  <div className="form-row">
    <div className="col">
    <label for="inputEmail4" className="crea2">Nombres</label>
      <input type="text" className="form-control" placeholder="Nombres"/>
    </div>
    <div className="col">
      <label for="inputEmail4" className="crea2">Apellidos</label>
      <input type="text" className="form-control" placeholder="Apellidos"/>
    </div>
  </div>
</form>
<form className="Crea">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" className="crea2">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="ejemplo@Email.com"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" className="crea2">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="*****"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress" className="crea2">Correo de recuperacion</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Ejemplo@Email.com"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2" className="crea2">Numero Celular</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="310*******"/>
  </div>
  
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Echa un vistazo
      </label>
    </div>
  </div>
  <a class="btn btn-primary" href="https://jd51c.csb.app/bienvenidos" role="button">Registrarse</a>
</form>
<br></br><br></br><br></br><br></br><br></br>
</div>
</>
)

  
}
export default Crear;