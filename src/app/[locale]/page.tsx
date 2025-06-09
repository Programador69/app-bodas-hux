"use client";
import "../App.css";
import { useReducer, useState } from "react";
import { reducer, cotizar } from "../actions";
import { Pr1, Pr2, Pr3, Pr4, Pr5, Extras } from "../componentes/formulario/preguntas";
import { Respuesta, Formulario } from "../componentes";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";

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
  <Head>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
            };
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1221182429791217');
          fbq('track', 'PageView');
        `,
      }}
    />
    <noscript>
      <Image
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1221182429791217&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  </Head>


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
