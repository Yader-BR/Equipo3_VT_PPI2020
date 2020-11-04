import React from 'react'
import '../estilos/Saludo.css'
function Saludo (){
return(
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

<br></br><a className="navbar-brand" href="https://jd51c.csb.app/"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg> </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        
        <a className="nav-link" href="https://jd51c.csb.app/crea"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>Crear Cuenta <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://jd51c.csb.app/cuenta"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg> Inisiar sesión</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
</svg>Paginas
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="https://jd51c.csb.app/bienvenidos">Bienvenida</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/cuestionario">Preguntas</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/alertas">Alertas</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/consejos">Consejos</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/video">Videos</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/ideas">Ideas</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/historias">Historias</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/agradecimientos">Agradecimientos</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/sugerencia">Sugerencias</a>
          <a class="dropdown-item" href="https://jd51c.csb.app/creditos">Creditos</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div className="body">
<h1 className="titulo">BIENVENIDO A CEF </h1>
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Bienvenido Amigo!</strong> Te has registrado correctamente, ahora podras disfrutar de nuestra informacion.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div className="card-group">
  <div className="card">
    <img src="https://i.picasion.com/pic90/c8b1dfb5ad886963ed7c176c8d5396fa.gif" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Informaci´n sobre la Pagina</h5>
      <p className="card-text">

CEF "Convivencia en familia" es un proyecto que tiene como finalidad promover relaciones familiares sanas, a través de ideas, consejos y normas que ayudaran en la convivencia en el hogar. La convivencia en familia no solo es un factor de bienestar para las personas, sino la base desde la que se construye la ciudadanía, el capital social y el futuro de nuestro país. Cuando las relaciones interpersonales se encuentran deterioradas, se genera el fenómeno de la violencia, de ahí la importancia de realizar esta aplicación, ya que facilitara el desarrollo de competencias, habilidades y valores en la construcción de una cultura de paz. Recuerda que "El cambio inicia por tu actitud"</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card">
    <img src="https://tse3.mm.bing.net/th?id=OIP.LQYOSSN7IZir17dK3CRQowHaFK&pid=Api&P=0&w=218&h=153" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Nuestra Visión</h5>
      <p className="card-text">Visión
Es un proyecto dirigido para las familias las cuales tiene dificultades en la convivencia, el nombre que se le otorgo a este proyecto es "Convivencia en familia", es una pagina web de fácil navegabilidad la cual contendrá consejos, tips, ideas y varias observaciones para aquellas personas interesadas en tener una mejor convivencia en su hogar y evitar que ciertas situaciones se salgan de control, con este proyecto se pretende generar conciencia par que la convivencia mejore cada vez más, recuerda "El cambio inicia por tu actitud"</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="https://steemitimages.com/DQmZA1KY4TnEzNNtNDLA61YdwDP9fLkwbnpXrVMwKPXVXTb/familia.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Nuestra Misión</h5>
      <p className="card-text">Nuestra mision esta pensada en ti, en poder generar un gran movimiento y de eeta forma poder generar cambios en nuestro futuro, porque cabe recalcar que depende de nosotros 
      el futuro de este pais y depende de nosotros ca,biar para bien este pais o seguir de para atras todos los dias. Rrecuerda que tosos somos un pais y podemos crear un futuro mejor. </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<br></br>
<a href="https://jd51c.csb.app/cuestionario" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Siguiente</a>
<a href="https://jd51c.csb.app/#carouselExampleFade/cuenta" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Atras</a>
</div>
</>
)
}
export default Saludo; 