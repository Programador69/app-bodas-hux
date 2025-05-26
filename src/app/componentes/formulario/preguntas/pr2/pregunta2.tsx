"use client";
import "./pregunta2.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Pr2({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const t = useTranslations("pr2");

    return (
        <article className="articlePr2">
            {/* <h3>¿Qué tipo de ceremonia deseas?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("3500", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/noquieroceremonia.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op1")} </span>
                </button>

                <button onClick={() => manejarCambio("6100", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/simbolica.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op2")} </span>
                </button>

                <button onClick={() => manejarCambio("5600", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/religiosa.JPG" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op3")} </span>
                </button>

                <button onClick={() => manejarCambio("9550", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/civil.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op4")} </span>
                </button>

                <button onClick={() => manejarCambio("45000", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/zapoteca.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op5")} </span>
                </button>

                <button onClick={() => manejarCambio("9550", dispatch, "pr2", setIteracion)}>
                    <Image src="/Pregunta2/aunnose.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op6")} </span>
                </button>
            </div>
        </article>
    )
}