import "./respuesta.css";
import type { Respuesta } from "../../utilidades/types";

// Pedir las url de los links de calendly, whatsapp, instagram y youtube a Marce

export function Respuesta({cotizacion, boton, setIteracion, nombre="Usuari@"}: Respuesta) {
    const reiniciar = () => {
        boton(false);
        setIteracion(0);
    }

    return (
        <div className="respuesta">
            <h1>¡Hola {nombre}!</h1>
            <h2>Gracias por responder nuestro simulador ✨</h2>

            <h3>Según las elecciones que hiciste, el rango estimado para organizar una boda como la que imaginas en Huatulco es de:</h3>

            <span> 🎯 ${cotizacion.toLocaleString("es-MX")} MXN</span>

            <p className="despedida">Sabemos que cada boda es única, por eso esta cifra es solo un punto de partida. Nuestro equipo se especializa en crear bodas a la medida, cuidando cada detalle y respetando la inversión de cada pareja.</p>


            <main>
                <section>
                    <h3>¿Qué sigue?</h3>
                    <p>🎥 ¿Te gustaría que armemos una propuesta más personalizada y con ideas reales de proveedores, locaciones y estilos?</p>
                    <p>
                        Agenda una videollamada sin costo aquí ➡️
                        <a href="https://calendly.com/tu-link-de-calendly" target="_blank" rel="noopener noreferrer">Calendly</a>
                    </p>
                    <p>
                        También puedes escribirnos directo por WhatsApp ➡️
                        <a href="https://wa.me/529999999999" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
                    </p>
                </section>

                <section className="bonus">
                    <h3>Bonus</h3>
                    <p>
                        Mientras tanto, aquí tienes inspiración real de bodas organizadas por nuestro equipo:
                        <a href="https://www.instagram.com/tu-link-de-instagram" target="_blank" rel="noopener noreferrer"> Instagram</a>
                        <span> | </span>
                        <a href="https://www.instagram.com/tu-link-de-instagram" target="_blank" rel="noopener noreferrer"> Youtube</a>
                    </p>
                    
                    <button className="botonRepetir" onClick={reiniciar}>Repetir el formulario</button>
                </section>
            </main>

            <footer>
                <h4>
                    Gracias por confiar en Bodas Huatulco; estamos listas para ayudarte a dar este gran paso.
                </h4>
                <p>
                    Con cariño, Marce & el equipo de Bodas Huatulco.
                </p>
                <span>🌴 Especialistas en bodas destino desde hace 16 años</span>
            </footer>
        </div>
    );
}