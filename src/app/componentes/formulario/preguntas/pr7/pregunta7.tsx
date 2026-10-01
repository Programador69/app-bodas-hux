"use client";
import "./pregunta7.css";
import { manejarCambio } from "../../../../actions";
import { useTranslations } from "next-intl";
import type { Action, DatosEnviar, Estado } from "../../../../utilidades/types";
import { useState } from "react";
import { enviarDatos } from "@/app/actions/enviarDatos/enviarDatos";

type PropsPr7 = {
    pr1: number;
    setBoton: React.Dispatch<React.SetStateAction<boolean>>;
    dispatch: React.Dispatch<Action>;
    datos: Estado;
    datosEnviar: DatosEnviar;
    idUnico: string; 
};

export function Pr7({pr1, datos, datosEnviar, idUnico, setBoton, dispatch}: PropsPr7) {
    const [presupuesto, setPresupuesto] = useState("");
    const t = useTranslations("pr7");

    const handleClick = async () => {
        if (presupuesto === "") {
            alert("Por favor, selecciona un presupuesto.");
        } else {
            manejarCambio(presupuesto, dispatch, "pr7");
            setBoton(true);
        }

        const { action, method, formData, captchaToken, utm_source, utm_campaign, utm_content } = datosEnviar;
        const datosFinales = { ...datos, pr7: parseInt(presupuesto) };

        const textoRango = presupuesto === "49000" ? "menor a 50,000" : presupuesto === "74000" ? "entre 50,000 y 75,000" :
            presupuesto === "75000" ? "mayor a 75,000" : presupuesto === "99000" ? "menor a 100,000" : 
            presupuesto === "149000" ? "entre 100,000 y 150,000" : presupuesto === "299000" ? "entre 150,000 y 300,000" :
            presupuesto === "449000" ? "entre 300,000 y 450,000" : presupuesto === "450000" ? "mayor a 450,000" : "fuera de rango";

        try {
            await enviarDatos({
                action,
                method,
                formData,
                datos: datosFinales,
                captchaToken,
                idMeta: idUnico,
                utm_source,
                utm_campaign,
                utm_content,
                textoRango
            });
        } catch (error) {
            console.error("Error al enviar los datos:", error);
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