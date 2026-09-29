"use client";
import "./pregunta7.css";
import { manejarCambio } from "../../../../actions";
import { useTranslations } from "next-intl";
import type { Action } from "../../../../utilidades/types";
import { useState } from "react";

type PropsPr7 = {
    pr1: number;
    setBoton: React.Dispatch<React.SetStateAction<boolean>>;
    dispatch: React.Dispatch<Action>;
};

export function Pr7({pr1, setBoton, dispatch}: PropsPr7) {
    const [presupuesto, setPresupuesto] = useState("");
    const t = useTranslations("pr7");

    const handleClick = () => {
        if (presupuesto === "") {
            alert("Por favor, selecciona un presupuesto.");
        } else {
            manejarCambio(presupuesto, dispatch, "pr7");
            setBoton(true);
        }
    }
    
    return (
        <article className="articlePr7">
            <div className="preguntaPresupuesto">
                {
                    pr1 <= 15000 ? 
                    <>
                        <input type="radio" name="presupuesto" value="49000" onChange={(e) => setPresupuesto(e.target.value)} />
                        <input type="radio" name="presupuesto" value="74000" onChange={(e) => setPresupuesto(e.target.value)} />
                        <input type="radio" name="presupuesto" value="75000" onChange={(e) => setPresupuesto(e.target.value)} />
                    </>
                    : 
                    <>
                        <input type="radio" name="presupuesto" value="99000" onChange={(e) => setPresupuesto(e.target.value)} />
                        <input type="radio" name="presupuesto" value="149000" onChange={(e) => setPresupuesto(e.target.value)} />
                        <input type="radio" name="presupuesto" value="299000" onChange={(e) => setPresupuesto(e.target.value)} />
                        <input type="radio" name="presupuesto" value="449000" onChange={(e) => setPresupuesto(e.target.value)} />
                        <input type="radio" name="presupuesto" value="450000" onChange={(e) => setPresupuesto(e.target.value)} />
                    </>
                }
                {/* <input type="number" value={presupuesto} placeholder={t("input")} onChange={(e) => setPresupuesto(e.target.value)} /> */}
            </div>
            
                <button onClick={handleClick}> {t("boton")} </button>
        </article>
    )
}