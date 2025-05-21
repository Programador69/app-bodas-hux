"use client";
import "./pregunta5.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";

export function Pr5({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <article className="articlePr5">
            {/* <h3>¿Qué tipo de menú buscas?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("1040", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/canapesybocadillos.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Solo canapes y bocadillos</span>
                </button>

                <button onClick={() => manejarCambio("935", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/taquizaocomidatipica.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Taquiza o comida típica mexicana</span>
                </button>

                <button onClick={() => manejarCambio("1485", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/menu3tiempos.JPG" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Menu de 3 tiempos</span>
                </button>

                <button onClick={() => manejarCambio("1595", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/buffet.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Buffet variado</span>
                </button>

                <button onClick={() => manejarCambio("1810", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/banquetegourmet.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Banquete gourmet</span>
                </button>
                <button onClick={() => manejarCambio("2530", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/experienciaculinaria.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Experiencia culinaria personalizada</span>
                </button>
            </div>
        </article>
    )
}