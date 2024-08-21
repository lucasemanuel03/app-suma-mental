import React, { useEffect, useState } from "react";
import './Game.css'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import validarSuma from "./validarSuma";
import URL_BACKEND from "../../url-backend";
import river from '../../assets/river-2018.gif'

function Game(){
    const { level } = useParams();


    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [sum, setSum] = useState(null);
    

    const [usrSum, setUrsSum] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);


    useEffect(() => {
        const fetchSum = async (levelElegido) => {
            try{
                const res = await axios.get(`${URL_BACKEND}/suma?level=${levelElegido}`)
                setNum1(res.data.numero1);
                setNum2(res.data.numero2);
                setSum(res.data.resultado);
                console.log(res.data)
            }catch(error){
                console.error(error);
            }
        };
        fetchSum(level)
    }, [level]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(validarSuma(sum, +usrSum)){
            setIsCorrect(true);
        }else{
            setIsCorrect(false);
        }

            // Forzar el reinicio de la animación
        const txtCorrectoElement = document.querySelector('.txt-correcto');
        if (txtCorrectoElement) {
            txtCorrectoElement.classList.remove('txt-correcto');
            void txtCorrectoElement.offsetWidth; // Fuerza el reflow para reiniciar la animación
            txtCorrectoElement.classList.add('txt-correcto');
        } else {
            console.error('Elemento con la clase txt-correcto no encontrado.');
        }

        console.log('Datos Obtendidos: ', usrSum);
        console.log(validarSuma(sum, +usrSum))
    }

    return(
        <div className="div-principal">
            <h3>PANTALLA JUEGO</h3>

            <Link to='/'>Volver</Link>
            <h3>SUMA: </h3>
            <h2>{num1} + {num2}</h2>
            <div className="div-suma">
                <span id="numeroA">{num1}</span>
                <span id="Sumador">+</span>
                <span id="numeroB">{num2}</span>
            </div>

            <div className="div-resultado">
                <form className="form-suma" onSubmit={handleSubmit}>
                    <label>RESULTADO: </label>
                    <input className="input-numerico" name="result" type="number" value={usrSum} onChange={(e) => setUrsSum(e.target.value)}></input>
                    <input className="submit-verificar" type="submit" value="Verificar"></input>
                </form>
            </div>
            <div className="div-final">
                {isCorrect !== null && (
                    <div className="div-respuesta">
                    <h2 className="txt-correcto" >{isCorrect ? 'Correcto!' : 'Incorrecto'}</h2>
                    <h2 className="txt-correcto">{usrSum === '091218' ? ':: Madrid 2018 :: AGUANTE RIVER!!': ''}</h2>
                    </div>
                )}

                {(isCorrect !== null && usrSum === '0912')? 
                <div>
                    <h3>AGUANTE RIVER!! : Madrid 2018</h3>
                    <img src={river} alt="Como te duele la cola desde el 9-12"/>
                </div> : <div></div>}
            </div>
        </div>
    )
}

export default Game