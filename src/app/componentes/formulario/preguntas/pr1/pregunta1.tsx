"use client";
import "./pregunta1.css";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Action {
    type: string;
    value: number;
}

export function Pr1({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const t = useTranslations("inicio");

    return (
        <article className="articlePr1">
            {/* <h3>¿Cuántos invitados planeas tener?</h3> */}
            <h3 className="tituloPregunta">
                {t("pr")}
            </h3>

            <div className="imagenes">
                <button onClick={() => manejarCambio("11000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/solo2.jpg" alt="Imagen visual de una boda" width={100} height={100}/>
                    <span> {t("op1")} </span>
                </button>

                <button onClick={() => manejarCambio("15000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/menosde15.jpg" alt="Imagen visual de una boda" width={100} height={100}/>
                    <span> {t("op2")} </span>
                </button>

                <button onClick={() => manejarCambio("50000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/21a50.jpg" alt="Imagen visual de una boda" width={100} height={100}/>
                    <span> {t("op3")} </span>
                </button>

                <button onClick={() => manejarCambio("75000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/51a100.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op4")} </span>
                </button>

                <button onClick={() => manejarCambio("85000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/100a150.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op5")} </span>
                </button>

                <button onClick={() => manejarCambio("100000", dispatch, "pr1", setIteracion)}>
                    <Image src="/Pregunta1/masde150.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op6")} </span>
                </button>
            </div>
        </article>
    )
}