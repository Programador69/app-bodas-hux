import "./respuesta.css";
import type { Respuesta } from "../../utilidades/types";
import { useTranslations } from "next-intl";


export function Respuesta({cotizacion, boton, setIteracion, nombre="Usuari@"}: Respuesta) {
    const reiniciar = () => {
        boton(false);
        setIteracion(0);
    }

    const t = useTranslations("resultado");

    return (
        <div className="respuesta">
            <h1>¡{t("h1")} {nombre}!</h1>
            <h2> {t("h2")} </h2>

            <h3> {t("h3")} </h3>

            <span> 🎯 ${cotizacion.toLocaleString("es-MX")} MXN</span>

            <p className="despedida"> {t("p")} </p>


            <main>
                <section>
                    <h3> {t("h3-blanco")} </h3>
                    <p> {t("p-blanco")} </p>
                    <p>
                        {t("p2-blanco")}
                        <a href="https://calendly.com/bodashuatulco/presentacion-de-propuesta" target="_blank" rel="noopener noreferrer">Calendly</a>
                    </p>
                    <p>
                        {t("p3-blanco")}
                        <a href="https://wa.me/529581306925" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
                    </p>
                </section>

                <section className="bonus">
                    <h3> {t("h32-blanco")} </h3>
                    <p>
                        {t("p4-blanco")}
                        <a href="https://www.instagram.com/bodashuatulco" target="_blank" rel="noopener noreferrer"> Instagram</a>
                        <span> | </span>
                        <a href="https://www.youtube.com/bodashuatulco" target="_blank" rel="noopener noreferrer"> Youtube</a>
                    </p>

                    {
                        t("boton") == "Start again" ? (
                            <>
                                <p>🔁 Want to explore other options? </p>
                                <button className="botonRepetir" onClick={reiniciar}> {t("boton")} </button>
                            </>
                        ) : <button className="botonRepetir" onClick={reiniciar}> {t("boton")} </button>
                    }
                    
                </section>
            </main>

            <footer>
                <h4>
                    {t("h4")}
                </h4>
                <p>
                    {t("p-footer")}
                </p>
                <span> {t("span-footer")} </span>
            </footer>
        </div>
    );
}