"use client";
import "./pregunta3.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Pr3({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const t = useTranslations("pr3");

    return (
        <article className="articlePr3">
            {/* <h3>¿Comó imaginas la decoración de tu boda?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("330", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/sencillaynatural.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op1")} </span>
                </button>

                <button onClick={() => manejarCambio("500", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/intimacondetalles.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op2")} </span>
                </button>

                <button onClick={() => manejarCambio("750", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/tropical.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op3")} </span>
                </button>

                <button onClick={() => manejarCambio("950", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/elegantecondiseno.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op4")} </span>
                </button>

                <button onClick={() => manejarCambio("1200", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/produccioncompleta.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op5")} </span>
                </button>

                <button onClick={() => manejarCambio("1900", dispatch, "pr3", setIteracion)}>
                    <Image src="/Pregunta3/wowtotal.jpg" alt="Imagen visual de una boda" width={100} height={100} />
                    <span> {t("op6")} </span>
                </button>
            </div>
        </article>
    )
}