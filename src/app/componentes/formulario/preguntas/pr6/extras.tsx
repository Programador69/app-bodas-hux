"use client";
import "./extras.css";
import { useState, useEffect } from "react";
import type { Action } from "../../../../utilidades/types";
import Image from "next/image";

export function Extras({dispatch}: {dispatch: React.ActionDispatch<[action: Action]>}) {
    const [extras, setExtras] = useState({suma: 0, opciones: ""});

    useEffect(() => {
        dispatch({ type: 'extras', value: 0, payload: {suma: extras.suma, opciones: extras.opciones} });
    }, [extras, dispatch]);

    return (
        <article className="articleExtras">
            {/* <h3>Servicios Extras</h3> */}
            <ul className="contenedor">
                <li>
                    <label>
                        <Image src="/ServiciosExtras/fotografo.png"  alt="Imagen representativa de un servicio de foto en una boda" width={100} height={100} />
                        <input type="checkbox" onChange={(e) => setExtras((ext) => {
                            return {
                                ...ext,
                                suma: ext.suma + (e.target.checked ? 21500 : -21500),
                                opciones: e.target.checked ? ext.opciones + " Fotografo, " : ext.opciones.replace("Fotografo, ", "")
                            }
                        })} />Foto
                    </label>
                </li>
                <li>
                    <label>
                        <Image src="/ServiciosExtras/video.png"  alt="Imagen representativa de un servicio de video en una boda" width={100} height={100} />
                        <input type="checkbox" onChange={(e) => setExtras(ext => {
                            return {
                                ...ext,
                                suma: ext.suma + (e.target.checked ? 22500 : -22500),
                                opciones: e.target.checked ? ext.opciones + " Video, " : ext.opciones.replace("Video, ", "")
                            }
                        })} />Video
                    </label>
                </li>
                <li>
                    <label>
                        <Image src="/ServiciosExtras/maquillaje.jpg"  alt="Imagen representativa de un servicio de maquillaje en una boda" width={100} height={100} />
                        <input type="checkbox" onChange={(e) => setExtras(ext => {
                            return {
                                ...ext,
                                suma: ext.suma + (e.target.checked ? 6000 : -6000),
                                opciones: e.target.checked ? ext.opciones + " Maquillaje, " : ext.opciones.replace("Maquillaje, ", "")
                            }
                        })} />Maquillaje
                    </label>
                </li>
                <li>
                    <label>
                        <Image src="/ServiciosExtras/calenda.JPG"  alt="Imagen representativa de un servicio de calenda en una boda" width={100} height={100} />
                        <input type="checkbox" onChange={(e) => setExtras(ext => {
                            return {
                                ...ext,
                                suma: ext.suma + (e.target.checked ? 18400 : -18400),
                                opciones: e.target.checked ? ext.opciones + " Calenda, " : ext.opciones.replace("Calenda, ", "")
                            }
                        })} />Calenda
                    </label>
                </li>
                <li>
                    <label>
                        <Image src="/ServiciosExtras/showdefuego.jpg"  alt="Imagen representativa de un servicio de show de fuego en una boda" width={100} height={100} />
                        <input type="checkbox" onChange={(e) => setExtras(ext => {
                            return {
                                ...ext,
                                suma: ext.suma + (e.target.checked ? 16900 : -16900),
                                opciones: e.target.checked ? ext.opciones + " Show de fuego, " : ext.opciones.replace("Show de fuego, ", "")
                            }
                        })} />Show de fuego
                    </label>
                </li>
            </ul>
        </article>
    )
}