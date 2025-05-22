"use client";
import "./pregunta4.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";

export function Pr4({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <article className="articlePr4">
            {/* <h3>¿Qué musica requieres?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("12500", dispatch, "pr4", setIteracion)}>
                    <span>Solo algo de fondo (Música tranquila durante la ceremonia y el cóctel)</span>
                </button>

                <button onClick={() => manejarCambio("24500", dispatch, "pr4", setIteracion)}>
                    <span>Un momento especial (Algún músico o cantante en vivo para la ceremonia o el primer baile)</span>
                </button>

                <button onClick={() => manejarCambio("32000", dispatch, "pr4", setIteracion)}>
                    <span>Dj para ambientar (Quiero que la fiesta tenga buena energía, pero sin algo demasiado elaborado)</span>
                </button>

                <button onClick={() => manejarCambio("82000", dispatch, "pr4", setIteracion)}>
                    <span>Música en vivo (Una banda, grupo versátil o mariachi para darle vida al evento)</span>
                </button>

                <button onClick={() => manejarCambio("43100", dispatch, "pr4", setIteracion)}>
                    <span>Fiesta total (DJ + efectos especiales luces, pista iluminada, etc. Para hacer un fiestón)</span>
                </button>
                <button onClick={() => manejarCambio("150000", dispatch, "pr4", setIteracion)}>
                    <span>Experiencia completa (música en vivo para ceremonia/cóctel, DJ/banda para la fiesta, con ambientación y producción pro)</span>
                </button>
            </div>
        </article>
    )
}