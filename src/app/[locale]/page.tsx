"use client";
import "../App.css";
import { useReducer, useState } from "react";
import { reducer, cotizar } from "../actions";
import { Pr1, Pr2, Pr3, Pr4, Pr5, Extras } from "../componentes/formulario/preguntas";
import { Respuesta, Formulario } from "../componentes";
import { useTranslations } from "next-intl";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {pr1: 0, pr2: 0, pr3: 0, pr4: 0, pr5: 0, extras: {suma: 0, opciones: ""}});
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
      <Formulario setBoton={setBotonClickeado} setNombre={setNombre} datos={{...state, cotizacion: cotizacion}} key={"formularioFinal"}/>
    ];

    const handleClickCotizar = () => {
        const cotizacion = cotizar(state);
        setCotizacion(cotizacion);
        setIteracion(it => it + 1);
    }

    const t = useTranslations("inicio");
    const seis = useTranslations("pr6");

    return (
        <>

        {
            botonClickeado ? <Respuesta cotizacion={cotizacion} boton={setBotonClickeado} setIteracion={setIteracion} nombre={nombre} /> : (
                <>
                {
                  iteracion == 0 ? (
                    <>
                      <h1 className="titulo"> {t("h1")} </h1>
                      <h2 className="h2Inicio"> {t("h2")} </h2>
                      <h3 className="h3Inicio"> {t("h3")} </h3>
                    </>
                  ) : (
                    <>
                      <h1></h1>
                    </>

                  )
                }

                    <main>
                        <section className="contenedorPreguntas">
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

                    <footer>
                          <h4> {t("pie")} </h4>
                    </footer>
                </>
            )
        }
        </>
    );
}
