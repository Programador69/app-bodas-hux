"use server";

import { Estado, EstadoFormulario } from "@/app/utilidades/types";
import { subirDatosBD } from "../index";

type PropsEnviar = {
    action: string;
    method: string;
    formData: EstadoFormulario;
    datos: Estado;
    captchaToken: string
    idMeta: string;
    utm_source: string;
    utm_campaign: string;
    utm_content: string;
};

function encodeForm(data: Record<string, string>) {
    return Object.keys(data)
    .map(
    (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(data[key] ?? "")
    )
    .join("&");
}

export async function enviarDatos({action, method, formData, datos, captchaToken, idMeta, utm_source, utm_campaign, utm_content }: PropsEnviar) {
    // Recuperar los demas datos del formulario
    const respuestaInvitados = datos.pr1 == 11000 ? "Solo Nosotros 2" : datos.pr1 == 15000 ? "Menos de 15 invitados" : datos.pr1 == 50000 ? "21 a 50 invitados" : datos.pr1 == 75000 ? "51 a 100 invitados" : datos.pr1 == 85000 ? "100 a 150 invitados" : datos.pr1 == 100000 ? "Mas de 150" : "n/a";
    const respuestaCeremonia = datos.pr2 == 3500 ? "No quiero Ceremonia" : datos.pr2 == 6100 ? "Simbólica" : datos.pr2 == 5600 ? "Religiosa" : datos.pr2 == 9550 ? "Civil" : datos.pr2 == 45000 ? "Zapoteca" : "n/a";
    const respuestaDecoracion = datos.pr3 == 330 ? "Sencilla y Natural" : datos.pr3 == 500 ? "Intima con Detalles" : datos.pr3 == 750 ? "Tropical con estilo" : datos.pr3 == 950 ? "Elegante con diseño" : datos.pr3 == 1200 ? "Producción Completa" : datos.pr3 == 1900 ? "WOW TOTAL" : "n/a";
    const respuestaMusica = datos.pr4 == 12500 ? "Solo Algo de fondo" : datos.pr4 == 24500 ? "Un momento especial" : datos.pr4 == 32000 ? "Dj para Ambientar" : datos.pr4 == 82000 ? "Música en Vivo" : datos.pr4 == 43100 ? "Fiesta Total" : datos.pr4 == 150000 ? "Experiencia musical completa" : "n/a";
    const respuestaMenu = datos.pr5 == 1040 ? "Solo canapes y bocadillos" : datos.pr5 == 935 ? "Taquiza o comida típica mexicana" : datos.pr5 == 1485 ? "Menu de 3 tiempos" : datos.pr5 == 1595 ? "Buffet variado" : datos.pr5 == 1810 ? "Banquete gourmet" : datos.pr5 == 2530 ? "Experiencia culinaria personalizada" : "n/a";
    const respuestaExtras = `${datos.extras.opciones}, Presupuesto maximo: ${datos.pr7}`;


    const datosCRM: Record<string, string> = {
        "data[Client][first_name]": formData["data[Client][first_name]"],
        "data[Client][last_name]": formData["data[Client][last_name]"],
        "data[Client][cellphone]": formData["data[Client][cellphone]"],
        "data[Client][email]": formData["data[Client][email]"],
        "data[Client][fecha_de_la_boda]": formData["data[Client][fecha_de_la_boda]"],
        "data[Client][nombre_de_la_pareja]": formData["data[Client][nombre_de_la_pareja]"],
        "data[Client][presupuesto_budget]": (datos.cotizacion || 0).toString(),
        "data[Client][cuantos_invitados_estas_considerando_how_many_guests_are_you_considering]": "0",
        "g-recaptcha-response": captchaToken
    };


    const bodyEncoded = encodeForm(datosCRM);

    const res = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: bodyEncoded,
    });
  
    console.log("STATUS:", res.status);
    console.log("RESPONSE:", await res.text());    

    if (!res.ok) {
      console.error("Error al enviar datos a IncrementaCRM");
    } else {
      console.log("Datos enviados al IncrementaCRM");
    }

    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0'); // Asegurarse de que el día tenga dos dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    const ano = fecha.getFullYear();

    const diaCorto = `${ano}-${mes}-${dia}`;

    const dataFinal = {
        ...formData,
        fechaBoda: formData["data[Client][fecha_de_la_boda]"],
        nombrePareja: formData["data[Client][nombre_de_la_pareja]"],
        'invitados': respuestaInvitados,
        'ceremonia': respuestaCeremonia,
        'decoracion': respuestaDecoracion,
        'musica': respuestaMusica,
        'menu': respuestaMenu,
        'extras': respuestaExtras,
        "cotizacion" : datos.cotizacion || 0,
        "fechaRegistro" : diaCorto,
        "idMeta": idMeta,
        "utm_source": utm_source,
        "utm_campaign": utm_campaign,
        "utm_content": utm_content
    }

    // console.log('Datos enviados:', dataFinal);
    await subirDatosBD(dataFinal);
}