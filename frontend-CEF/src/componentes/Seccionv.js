import React from 'react'
import '../estilos/video.css'
function Seccionv(){
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
  <h1 className="titulo">VIDEOS</h1>
<p className="video">En esta seccion queremos mostrarte algunos videos los cuales te podrian ser de gran ayuda, algunos son animados pero todos seran una reflexion para tu vida ¡Disfrutalos!</p>
<div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
<a href="https://jd51c.csb.app/ideas" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Siguiente</a>
<a href="https://jd51c.csb.app/consejos" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Atras</a>
</div>
  </>

)
}
export default Seccionv; 