import React from 'react'
import '../estilos/Inicio.css';
function Inicio (){
  return(
    <>
    <div className="body">
   <h1 className="Titulo"> INICIO </h1> 
  
   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.hotel-aroma.com/media/Happy-Family-Summer-Package.jpg" className="imagen2" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i0.wp.com/diocesisdecanarias.net/wp-content/uploads/2018/07/violenciafamilia.jpg?zoom=2.625&resize=1200%2C630&ssl=1" className="imagen2" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src="https://images.hoy.com.py/uploads/144915/violencia-genero_tinima20141125_0995_19__destacado.jpg" className="imagen2" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  
</div>
<a href="https://jd51c.csb.app/cuenta" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">INICIAR SESIÓN</a> <br></br><br></br>
<a href="https://jd51c.csb.app/crea" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">CREAR CUENTA</a>
</div>
    </>
  )
}
export default Inicio; 