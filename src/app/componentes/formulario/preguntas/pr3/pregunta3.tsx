"use client";
import "./pregunta3.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";

export function Pr3({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <article className="articlePr3">
            {/* <h3>¿Comó imaginas la decoración de tu boda?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("330", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/sencillaynatural.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Sencilla y natural</span>
                </button>

                <button onClick={() => manejarCambio("500", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/intimacondetalles.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Íntima con detalles</span>
                </button>

                <button onClick={() => manejarCambio("750", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/tropical.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Tropical con estilo</span>
                </button>

                <button onClick={() => manejarCambio("950", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/elegantecondiseno.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Elegante con diseño</span>
                </button>

                <button onClick={() => manejarCambio("1200", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/produccioncompleta.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Producción completa</span>
                </button>

                <button onClick={() => manejarCambio("1900", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/wowtotal.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>WOW total</span>
                </button>
            </div>
        </article>
    )
}