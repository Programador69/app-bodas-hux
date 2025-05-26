"use client";
import "./pregunta4.css";
import type { Action } from "../../../../utilidades/types";
import { manejarCambio } from "../../../../actions";
import { useTranslations } from "next-intl";

export function Pr4({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const t = useTranslations("pr4");

    return (
        <article className="articlePr4">
            {/* <h3>¿Qué musica requieres?</h3> */}
            <div className="imagenes">
                <button onClick={() => manejarCambio("12500", dispatch, "pr4", setIteracion)}>
                    <span> {t("op1")} </span>
                </button>

                <button onClick={() => manejarCambio("24500", dispatch, "pr4", setIteracion)}>
                    <span> {t("op2")} </span>
                </button>

                <button onClick={() => manejarCambio("32000", dispatch, "pr4", setIteracion)}>
                    <span> {t("op3")} </span>
                </button>

                <button onClick={() => manejarCambio("82000", dispatch, "pr4", setIteracion)}>
                    <span> {t("op4")} </span>
                </button>

                <button onClick={() => manejarCambio("43100", dispatch, "pr4", setIteracion)}>
                    <span> {t("op5")} </span>
                </button>
                <button onClick={() => manejarCambio("150000", dispatch, "pr4", setIteracion)}>
                    <span> {t("op6")} </span>
                </button>
            </div>
        </article>
    )
}