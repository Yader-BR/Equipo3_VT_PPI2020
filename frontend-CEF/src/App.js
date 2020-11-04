import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css"; 
import Pagina_inicio from "../src/paginas/Pagnina_inicio";
import Pagina_cuenta from "../src/paginas/Pagina_cuenta";
import Crear_cuenta from "../src/paginas/Crear_cuenta";
import Pagina_Cuestionario from "../src/paginas/Paginas_Cuestionario";
import Bienvenidos from "../src/paginas/Bienvenidos";
import Alertas from "../src/paginas/Alertas"
import Consejos from "../src/paginas/Consejos"
import Video from "../src/paginas/Video"
import Ideas from "../src/paginas/Ideas"
import Historias from "../src/paginas/Historas"
import Creditos from "../src/paginas/Creditos"
import Pagina_Agradecimientos from "../src/paginas/Pagina_Agradecimientos"
import Pagina_Sugerencias from "../src/paginas/Pagina_Sugerencias"
class App extends React.Component{
  render(){
    return(
<BrowserRouter>
<Switch>
<Route exact path="/" component={Pagina_inicio} />
<Route exact path="/cuenta" component={Pagina_cuenta} />
<Route exact path="/Crea" component={Crear_cuenta} />
<Route exact path="/cuestionario" component={Pagina_Cuestionario} />
<Route exact path="/bienvenidos" component={Bienvenidos} />
<Route exact path="/alertas" component={Alertas} />
<Route exact path="/consejos" component={Consejos} />
<Route exact path="/video" component={Video} />
<Route exact path="/ideas" component={Ideas} />
<Route exact path="/historias" component={Historias} />
<Route exact path="/creditos" component={Creditos} />
<Route exact path="/agradecimientos" component={Pagina_Agradecimientos} />
<Route exact path="/sugerencia" component={Pagina_Sugerencias} />
</Switch>
</BrowserRouter>
)

  }
}
export default App; 
