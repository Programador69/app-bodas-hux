"use client";

import "./respuestasExtras.css";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";


export function RespuestaNo1({nombre="Usuari@"}: {nombre: string}) {

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const nuevaUrl = `${pathname}?/gracias`;

        router.replace(nuevaUrl);
    },[router, pathname]);

    const t = useTranslations("resultado");

    const english = t("pie") == "en";

    return (
        <div className="respuestaExtra" style={t("pie") == "es" ? {backgroundImage: 'url("/No1.png"'} : {backgroundImage: 'url("/No1eng.png")'}}>
            <h1>¡{t("h1")} <span>{nombre.split(" ")[0]}</span>!</h1>


            <footer style={english ? {backgroundImage: 'url("/pieResEng.png")'} : {backgroundImage: 'url("/pieRes.png")'}}>
                <div className="redes" >
                    <a href="https://www.instagram.com/bodashuatulco" target="_BLANK" rel="noreferrer">
                        <FaInstagram style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px", color: "#fff"}} />
                    </a>

                    <a href="https://www.facebook.com/bodashuatulco" target="_BLANK" rel="noreferrer">
                        <FaFacebookF style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px", color: "#fff"}} />
                    </a>

                    <a href="https://youtu.be/-C0XtwCtvqk?si=GeG2DhuhGLWl8p4S" target="_BLANK" rel="noreferrer">
                        <FaYoutube style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px", color: "#fff"}} />
                    </a>

                    <a href="https://pin.it/3ZXEfolQj" target="_BLANK" rel="noreferrer">
                        <FaPinterestP style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px", color: "#fff"}} />
                    </a>

                    <a href="https://www.tiktok.com/@bodashuatulco" target="_BLANK" rel="noreferrer">
                        <FaTiktok style={{backgroundColor: "#62a5d1", borderRadius: "20px", padding: "5px", color: "#fff"}} />
                    </a>
                </div>
            </footer>
        </div>
    );
}