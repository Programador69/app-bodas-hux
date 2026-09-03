"use client";
import "./pregunta4.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image"
import { useTranslations } from "next-intl";

export function Pr4({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const idioma = useTranslations("pr4");

    const local = idioma("pie") === "es" ? true : false;

    return (
        <article className="articlePr4">

            {
                local ? (
                    <div className="imagenes">
                        <button onClick={() => manejarCambio("12500", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/soloAlgo.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span> Desde $12,500 </span>
                        </button>

                        <button onClick={() => manejarCambio("24500", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/momentoEspecial.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span> Desde $24,500 </span>
                        </button>

                        <button onClick={() => manejarCambio("32000", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/djAmbientar.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span> Desde $32,000 </span>
                        </button>

                        <button onClick={() => manejarCambio("82000", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/musicaVivo.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span> Desde $82,000 </span>
                        </button>

                        <button onClick={() => manejarCambio("43100", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/fiestaTotal.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span> Desde $43,100 </span>
                        </button>
                        <button onClick={() => manejarCambio("150000", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/experienciaCompleta.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span> Desde $150,000 </span>
                        </button>
                    </div>

                ) : (
                    <div className="imagenes">
                        <button onClick={() => manejarCambio("12500", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/soloAlgoEng.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span style={{left: '60%', bottom: '7px'}}> From $12,500 MXN</span>
                        </button>

                        <button onClick={() => manejarCambio("24500", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/momentoEspecialEng.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span style={{left: '60%', bottom: '7px'}}> From $24,500 MXN </span>
                        </button>

                        <button onClick={() => manejarCambio("32000", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/djAmbientarEng.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span style={{left: '60%', bottom: '7px'}}> From $32,000 MXN </span>
                        </button>

                        <button onClick={() => manejarCambio("82000", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/musicaVivoEng.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span style={{left: '60%', bottom: '7px'}}> From $82,000 MXN </span>
                        </button>

                        <button onClick={() => manejarCambio("43100", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/fiestaTotalEng.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span style={{left: '60%', bottom: '7px'}}> From  $43,100 MXN </span>
                        </button>
                        <button onClick={() => manejarCambio("150000", dispatch, "pr4", setIteracion)}>
                            <Image src="/Pregunta4/experienciaCompletaEng.png" alt="Opcion de musica para boda" width={200} height={200} />
                            <span style={{left: '60%', bottom: '7px'}}> From $150,000 MXN </span>
                        </button>
                    </div>
                )
            }
            
        </article>
    )
}