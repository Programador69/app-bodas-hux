"use client";
import "./pregunta1.css";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";

interface Action {
    type: string;
    value: number;
}

export function Pr1({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <article className="articlePr1">
            {/* <h3>¿Cuántos invitados planeas tener?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("11000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/solo2.jpg" alt="Imagen visual de una boda" width={100} height={100}/>
                    <span>Solo nosotros 2</span>
                </button>

                <button onClick={() => manejarCambio("15000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/menosde15.jpg" alt="Imagen visual de una boda" width={100} height={100}/>
                    <span>Menos de 15 invitados</span>
                </button>

                <button onClick={() => manejarCambio("50000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/21a50.jpg" alt="Imagen visual de una boda" width={100} height={100}/>
                    <span>21 a 50 invitados</span>
                </button>

                <button onClick={() => manejarCambio("75000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/51a100.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>51 a 100 invitados</span>
                </button>

                <button onClick={() => manejarCambio("85000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/100a150.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>100 a 150 invitados</span>
                </button>

                <button onClick={() => manejarCambio("100000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/masde150.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span>Más de 150 invitados</span>
                </button>
            </div>
        </article>
    )
}