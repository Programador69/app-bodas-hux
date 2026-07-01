"use client";

import "./respuesta.css";
import type { Respuesta } from "../../utilidades/types";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { PiCalendarHeartFill } from "react-icons/pi";
import { FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";


export function Respuesta({cotizacion, nombre="Usuari@"}: Respuesta) {

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const nuevaUrl = `${pathname}?/gracias`;

        router.replace(nuevaUrl);
    },[router, pathname]);

    const t = useTranslations("resultado");

    return (
        <div className="respuesta" style={t("pie") == "es" ? {backgroundImage: 'url("/resultado.png"'} : {backgroundImage: 'url("/resultadoEng.png")'}}>
            <h1>¡{t("h1")} <span>{nombre.split(" ")[0]}</span>!</h1>

            <span className="cotizacion">${cotizacion.toLocaleString("es-MX")} MXN</span>

            <main>
                <section className="botones">
                    <button className="botonVideollamada">
                        <PiCalendarHeartFill />
                        <a href="https://calendly.com/bodashuatulco/presentacion-de-propuesta" target="_blank" rel="noreferrer">{t("botonVideollamada")}</a>
                    </button>

                    <button className="botonWhats">
                        <FaWhatsapp />
                        <a href="https://wa.me/529581306925" target="_blank" rel="noreferrer">{t("botonWhats")}</a>
                    </button>
                </section>
            </main>

            <footer>
                <div className="redes" >
                    <a href="https://www.instagram.com/bodashuatulco" target="_BLANK" rel="noreferrer">
                        <FaInstagram style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px"}} />
                    </a>

                    <a href="https://www.facebook.com/bodashuatulco" target="_BLANK" rel="noreferrer">
                        <FaFacebookF style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px"}} />
                    </a>

                    <a href="https://youtu.be/-C0XtwCtvqk?si=GeG2DhuhGLWl8p4S" target="_BLANK" rel="noreferrer">
                        <FaYoutube style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px"}} />
                    </a>

                    <a href="https://pin.it/3ZXEfolQj" target="_BLANK" rel="noreferrer">
                        <FaPinterestP style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px"}} />
                    </a>

                    <a href="https://www.tiktok.com/@bodashuatulco" target="_BLANK" rel="noreferrer">
                        <FaTiktok style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px"}} />
                    </a>
                </div>
            </footer>
        </div>
    );
}