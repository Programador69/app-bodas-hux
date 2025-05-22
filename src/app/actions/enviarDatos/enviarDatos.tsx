"use server";

import { Estado } from "@/app/utilidades/types";
import { subirDatosBD } from "../index";

type FormData = {
    'data[Client][first_name]': string;
    'data[Client][last_name]': string;
    'data[Client][cellphone]': string;
    'data[Client][email]': string;
}

export async function enviarDatos({action, method, formData, datos}: {action: string, method: string, formData: FormData, datos: Estado}) {
    // Recuperar los demas datos del formulario
    const respuestaInvitados = datos.pr1 == 11000 ? "Solo Nosotros 2" : datos.pr1 == 15000 ? "Menos de 15 invitados" : datos.pr1 == 50000 ? "21 a 50 invitados" : datos.pr1 == 75000 ? "51 a 100 invitados" : datos.pr1 == 85000 ? "100 a 150 invitados" : datos.pr1 == 100000 ? "Mas de 150" : "n/a";
    const respuestaCeremonia = datos.pr2 == 3500 ? "No quiero Ceremonia" : datos.pr2 == 6100 ? "Simbólica" : datos.pr2 == 5600 ? "Religiosa" : datos.pr2 == 9550 ? "Civil" : datos.pr2 == 45000 ? "Zapoteca" : "n/a";
    const respuestaDecoracion = datos.pr3 == 330 ? "Sencilla y Natural" : datos.pr3 == 500 ? "Intima con Detalles" : datos.pr3 == 750 ? "Tropical con estilo" : datos.pr3 == 950 ? "Elegante con diseño" : datos.pr3 == 1200 ? "Producción Completa" : datos.pr3 == 1900 ? "WOW TOTAL" : "n/a";
    const respuestaMusica = datos.pr4 == 12500 ? "Solo Algo de fondo" : datos.pr4 == 24500 ? "Un momento especial" : datos.pr4 == 32000 ? "Dj para Ambientar" : datos.pr4 == 82000 ? "Música en Vivo" : datos.pr4 == 43100 ? "Fiesta Total" : datos.pr4 == 150000 ? "Experiencia musical completa" : "n/a";
    const respuestaMenu = datos.pr5 == 1040 ? "Solo canapes y bocadillos" : datos.pr5 == 935 ? "Taquiza o comida típica mexicana" : datos.pr5 == 1485 ? "Menu de 3 tiempos" : datos.pr5 == 1595 ? "Buffet variado" : datos.pr5 == 1810 ? "Banquete gourmet" : datos.pr5 == 2530 ? "Experiencia culinaria personalizada" : "n/a";
    const respuestaExtras = datos.extras.opciones;

    // Mandar la solicitud al CRM original
    const res = await fetch(action, {
        method: method,
        body: formData.toString(), // Si espera JSON cambiar a -> JSON.stringify(formData)
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    if (res.ok) {
        console.log('Datos registrados con éxito');
    }

    const dataFinal = {
        ...formData,
        'invitados': respuestaInvitados,
        'ceremonia': respuestaCeremonia,
        'decoracion': respuestaDecoracion,
        'musica': respuestaMusica,
        'menu': respuestaMenu,
        'extras': respuestaExtras,
        "cotizacion" : datos.cotizacion || 0,
    }

    // console.log('Datos enviados:', dataFinal);
    await subirDatosBD(dataFinal);
}