import React from "react";
import axios from 'axios';
import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './Inicio.css'
import URL_BACKEND from "../../url-backend";

function Inicio(){

    const [levels, setLevels] = useState([]);
  
    useEffect(() => {
      const fetchLevels = async () => {
        try{
          const resLevels = await axios.get(`${URL_BACKEND}/levels`)
          setLevels(resLevels.data);
          console.log('Niveles: ', resLevels.data)
        }catch(error){
          console.error('Error fetching Levels', error);
        }
      };
      fetchLevels();
    }, []);

    return(
      <div>
        <header>
          <h1>SUMA MENTAL</h1>
          <h2>Ponte a prueba</h2>
          <Link to="/game">Ir al Juego</Link>
        </header>

        <div className="div-inicio">
  
        <section className="section-levels">
          <h2 className="h2-titulos">SELECCIONA UN NIVEL</h2>
          <div className="contenedor-levels">
            {levels.map(level => (
            <Link to={`/game/${level.numero}`}
                    className="link-level">

              <div key={level.numero} className="comp-level">
              <h2 className="h2-level">{level.numero}</h2>
              <h4>{level.nombre}</h4>
              <h5>Dificultad: {level.dificultad}</h5>
              </div>
            </Link>
            ))}
          </div>
        </section>

        </div>
          
        <footer>
          <h4>APP SUMA MENTALES - TODOS LOS DERECHOS RESERVADOS</h4>
          <h5>Seguinos en nuestras Redes...</h5>
          <div className="footer-redes">
            <Link to={'https://www.instagram.com'}>INSTAGRAM</Link>
            <Link to={'https://www.facebook.com'}>FACEBOOK</Link>  
          </div>

          <Link to={'/faq'}>FAQ</Link>
          <Link to={'/faq'}>TERMINOS Y CONDICIONES</Link>
          <h5>Version 1.0.0 - Desarrollado por LebSystems</h5>
          <span>Córdoba, Argentina 2024</span>

        </footer>
      </div>
    )

}

export default Inicio