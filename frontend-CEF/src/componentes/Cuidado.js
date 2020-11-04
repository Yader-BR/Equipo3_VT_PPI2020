import React from 'react'
import "../estilos/Cuidado.css"
function Cuidado(){
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
<h1 className="titulo">ALERTAS </h1>
<br></br>

<h2 className="segundo">¿Comó distinguir que no se tiene un buen ambiente familiar?</h2> <br></br>
<p className="texto">Es claro que no a todos los miembros de un grupo familiar les gusta el mimo tipo de música, no a todos les gusta la misma comida o equipo, no todos tenemos las mismas preferencias o gustos. Somos seres humanos y no es inusual que tengamos gistos muy distintos, esto en algunos hogares 
  puede causar conflicto o disgustos entre los miembros de la familia, esto desataria un mal ambiente familiar el cual se volveria estresante y pesado 
  a la hora de estar todos juntos. </p>
<p className="texto"> A continuacion te enseñaremos que sucesos podrian ocacionarce en estos casos</p>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">1.Dificultad para concentrarce</h1>
    <p class="lead">Cuando se esta pasando por una mala convivencia familiar es dificil de dejar de pensar en ello, esto ocaciona una distraccion la cual no es para nada buena 
    ya que no nos deja avanzar en nuestras actividades diarias de forma normal </p>

  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">2. Sentirce incomodo al estar en casa</h1>
    <p class="lead">Es cierto que la incomodidad es lo mas desagradable que existe y mas cuando se trata de tu propia familia o algun familiar,
    estos casos son recurrentes, cuendo no se tiene un buen ambiente familiar es incomodo saber que llegaras a casa y sentiras ese ambiente pesado,
    ese ambiente de conflictos o discuciones en cada momento </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">3. Nesecidad de estar en cualquier lugar menos en casa.</h1>
    <p class="lead">Esta nesecidad es normal cuando el ambiente familiar no esta bien, se desearia estar en cualquier otro lugar o quedarce en el lugar en que te 
    encuentras para no llegar a casa y sentir de nuevo como tu animo decae de solo escuchar aquellas discuciones que no paran en ningun momento </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">4. Irritabilidad</h1>
    <p class="lead">Esa sensacion de irritacion cuando sabes que llegaras a casa y lo unico que encontraras son problemas, discuciones, peleas, alegatos, etc.  </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">5. Depresion, ansiedad o exceso de estres</h1>
    <p class="lead">En estos casos es recurrente ver que algunas personas empiezan a padecer de deprecion al no tener un ambiente sano esto podria llevar a casos mayores y desastrozos, ansiedad lo cual genera 
    el deseo de hacuel cualquer cosa menos estar con tu propia familia, el estres es lo peor ya que no te podria dejar dormir o hacer tus tareas diarias correctamente, la falta de descanso en el cuerpo puede llegar a 
    caudar enfermedades o una muerte mucho mas rapida </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">6. Sensación de pesadez en el cuerpo al sentirse triste</h1>
    <p class="lead">Es aquella sensacion de depresion al sentir que las cosas no marchan bien en tu hogar</p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">7. Falta de confianza en los demas</h1>
    <p class="lead">La falta de confianza es muy comun en estas personas, ya que ellas sienten que si se expresan como son pasara lo mismo que en su familia,
    sentora que le daran la espalda o la menos preciaran y esto los arrinconara a casos extremos como la depresion o el suicidio. Al sentirse solas o desproteginas no le encontraran sentido a la vida 
     </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">8. Sensacion de no ser Escuvhado</h1>
    <p class="lead">Es una sensacion muy comun en estos casos, la persona siempre estara negativa y por eso 
    tiene miedo a expresarce como es realmente ya que tiene el temor de ser rechazado o sentir la sensacion de que 
    la otra persona no lo esta escuchando y solo lo esta ignorando </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">9.Problemas de autoestima</h1>
    <p class="lead">La perdida de autoestima es algo grave ya que la persona simpre pensara lo negativo, pensara que no ocupa un lugar en ninguna parte 
    y que su existencia es irrelevante. Cuando una persona pierde gran parte de su autoestima pierde la confianza en si misma y hay que saber que la confianza en si mismo 
    es lo mas importante que se puede tener  </p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">10. Sensacion de sentirse abandonado </h1>
    <p class="lead">Al no tener el apoyo de la famimilia siente la ausencia de felicidad y esto ocaciona que la persona se sienta abandonada u olvidada por sus seres 
    queridos, en algunos casos la perona tiende a buscar refugio en habitos de muy mal ver como la drogadiccion. </p>
  </div>
</div>
<a href="https://jd51c.csb.app/consejos" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Siguiente</a> 
<a href="https://jd51c.csb.app/cuestionario" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Atras</a>
</div>


</>
)
}
export default Cuidado;