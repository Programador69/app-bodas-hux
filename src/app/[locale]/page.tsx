"use client";
import "../App.css";
import { useReducer, useState } from "react";
import { reducer, cotizar } from "../actions";
import { Pr1, Pr2, Pr3, Pr4, Pr5, Extras, Pr7 } from "../componentes/formulario/preguntas";
import { Respuesta, Formulario } from "../componentes";
import { useTranslations } from "next-intl";

const fondosPorPregunta = [
  'url("/pr1.png")',
  'url("/pr2.png")',
  'url("/pr3.png")',
  'url("/pr4.png")',
  'url("/pr5.png")',
  'url("/pr6.png")',
  'url("/pr7.png")',
  'url("/pr8.png")',
];

const fondosPorPreguntaEng = [
  'url("/pr1eng.png")',
  'url("/pr2eng.png")',
  'url("/pr3eng.png")',
  'url("/pr4eng.png")',
  'url("/pr5eng.png")',
  'url("/pr6eng.png")',
  'url("/pr7eng.png")',
  'url("/pr8eng.png")',
];

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {pr1: 0, pr2: 0, pr3: 0, pr4: 0, pr5: 0, extras: {suma: 0, opciones: ""}, pr7: 0});
    const [botonClickeado, setBotonClickeado] = useState(false);
    const [cotizacion, setCotizacion] = useState(0);
    const [iteracion, setIteracion] = useState(0);
    const [nombre, setNombre] = useState("");

    const arrayPreguntas = [
      <Pr1 dispatch={dispatch} setIteracion={setIteracion} key={"pr1"}/>,
      <Pr2 dispatch={dispatch} setIteracion={setIteracion} key={"pr2"}/>,
      <Pr3 dispatch={dispatch} setIteracion={setIteracion} key={"pr3"}/>,
      <Pr4 dispatch={dispatch} setIteracion={setIteracion} key={"pr4"}/>,
      <Pr5 dispatch={dispatch} setIteracion={setIteracion} key={"pr5"}/>,
      <Extras dispatch={dispatch} key={"extras"}/>,
      <Pr7 dispatch={dispatch} setIteracion={setIteracion} key={"pr7"}/>,
      <Formulario setBoton={setBotonClickeado} setNombre={setNombre} datos={{...state, cotizacion: cotizacion}} key={"formularioFinal"}/>
    ];

    const handleClickCotizar = () => {
        const cotizacion = cotizar(state);
        setCotizacion(cotizacion);
        setIteracion(it => it + 1);
    }

    const seis = useTranslations("pr6");

    const fondoEstilo = seis("pie") == "eng" ? {
        backgroundImage: fondosPorPreguntaEng[iteracion] || 'none',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "99%",
    } :
    {
        backgroundImage: fondosPorPregunta[iteracion] || 'none',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "99%",
    }


    return (
        <>
        {
            botonClickeado ? <Respuesta cotizacion={cotizacion} nombre={nombre} /> : (
                <>
                    <main>
                        <section className="contenedorPreguntas" style={fondoEstilo}>
                            {
                                iteracion == 5 ? (
                                    <>
                                        {arrayPreguntas[iteracion]}
                                        <button className="botonCotizar" onClick={handleClickCotizar}> {seis("boton")} </button>
                                    </>
                                ) : (
                                  <>
                                    {arrayPreguntas[iteracion]}
                                  </>
                                )
                            }
                        </section>
                    </main>

                    {/* <footer>
                    </footer> */}
                </>
            )
        }
        </>
    );
}
