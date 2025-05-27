"use client";
import "./pregunta5.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Pr5({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const t = useTranslations("pr5");

    return (
        <article className="articlePr5">
            {/* <h3>¿Qué tipo de menú buscas?</h3> */}
            <h1 className="tituloPregunta">
                {t("pr")}
            </h1>
            
            <div className="imagenes">
                <button onClick={() => manejarCambio("1040", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/canapesybocadillos.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op1")} </span>
                </button>

                <button onClick={() => manejarCambio("935", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/taquizaocomidatipica.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op2")} </span>
                </button>

                <button onClick={() => manejarCambio("1485", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/menu3tiempos.JPG" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op3")} </span>
                </button>

                <button onClick={() => manejarCambio("1595", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/buffet.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op4")} </span>
                </button>

                <button onClick={() => manejarCambio("1810", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/banquetegourmet.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op5")} </span>
                </button>
                <button onClick={() => manejarCambio("2530", dispatch, "pr5", setIteracion)}>
                    <Image src="/Pregunta5/experienciaculinaria.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op6")} </span>
                </button>
            </div>
        </article>
    )
}