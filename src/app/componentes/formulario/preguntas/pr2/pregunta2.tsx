"use client";
import "./pregunta2.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";

export function Pr2({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <article className="articlePr2">
            {/* <h3>¿Qué tipo de ceremonia deseas?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("3500", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/noquieroceremonia.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Sin ceremonia</span>
                </button>

                <button onClick={() => manejarCambio("6100", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/simbolica.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Simbolíca</span>
                </button>

                <button onClick={() => manejarCambio("5600", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/religiosa.JPG" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Religiosa</span>
                </button>

                <button onClick={() => manejarCambio("9550", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/civil.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Civil</span>
                </button>

                <button onClick={() => manejarCambio("45000", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/zapoteca.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Zapoteca</span>
                </button>

                <button onClick={() => manejarCambio("9550", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/aunnose.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Por definir</span>
                </button>
            </div>
        </article>
    )
}