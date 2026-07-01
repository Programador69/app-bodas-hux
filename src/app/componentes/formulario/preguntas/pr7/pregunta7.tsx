"use client";
import "./pregunta7.css";
import { manejarCambio } from "../../../../actions";
import { useTranslations } from "next-intl";
import type { Action } from "../../../../utilidades/types";
import { useState } from "react";

export function Pr7({dispatch, setIteracion}: {dispatch: React.ActionDispatch<[action: Action]>, setIteracion: React.Dispatch<React.SetStateAction<number>>}) {
    const [presupuesto, setPresupuesto] = useState("");
    const t = useTranslations("pr7");
    
    return (
        <article className="articlePr7">
            <div className="preguntaPresupuesto">
                <input type="number" value={presupuesto} placeholder={t("input")} onChange={(e) => setPresupuesto(e.target.value)} />
            </div>
            
                <button onClick={() => manejarCambio(presupuesto, dispatch, "pr7", setIteracion)}> {t("boton")} </button>
        </article>
    )
}