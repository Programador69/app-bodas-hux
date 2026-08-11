"use server";
import { createPool } from "@vercel/postgres";
import {enviarLeadCAPI} from "./fbMeta";

const URL = process.env.DATABASE_URL;

type Datos = {
    cotizacion: number;
    invitados: string;
    ceremonia: string;
    decoracion: string;
    musica: string;
    menu: string;
    extras: string;
    'data[Client][first_name]': string;
    'data[Client][last_name]': string;
    'data[Client][cellphone]': string;
    'data[Client][email]': string;
    fechaBoda: string;
    nombrePareja: string;
    idMeta: string;
    utm_source: string;
    utm_campaign: string;
    utm_content: string;
}

export async function subirDatosBD(datos: Datos) {
    try {
        const pool = createPool({
            connectionString: URL,
        })

        if (!pool) {
            throw new Error("La conexión a la base de datos no está inicializada")
        }

        await pool.sql`
            INSERT INTO clientes (nombre, apellido, celular, correo, cotizacion, invitados, ceremonia, decoracion, musica, menu, extras, fechaBoda, nombrePareja, fechaRegistro, utm_source, utm_campaign, utm_content, fechasusoformulario)
             VALUES (${datos['data[Client][first_name]']}, ${datos['data[Client][last_name]']}, ${datos['data[Client][cellphone]']}, ${datos['data[Client][email]']}, ${datos.cotizacion}, ${datos.invitados}, ${datos.ceremonia}, ${datos.decoracion}, ${datos.musica}, ${datos.menu}, ${datos.extras}, ${datos.fechaBoda}, ${datos.nombrePareja}, ${new Date().toISOString()}, ${datos.utm_source}, ${datos.utm_campaign}, ${datos.utm_content}, ${String(new Date().toISOString().slice(0,10))})
             ON CONFLICT (correo) DO UPDATE SET
             usos = clientes.usos + 1,
             cotizacion = EXCLUDED.cotizacion,
             invitados = EXCLUDED.invitados,
             ceremonia = EXCLUDED.ceremonia,
             decoracion = EXCLUDED.decoracion,
             musica = EXCLUDED.musica,
             menu = EXCLUDED.menu,
             extras = EXCLUDED.extras,
             fechaBoda = EXCLUDED.fechaBoda,
             nombrePareja = EXCLUDED.nombrePareja,
             fechaRegistro = EXCLUDED.fechaRegistro,
             fechasusoformulario = clientes.fechasusoformulario || ', ' || EXCLUDED.fechaRegistro,
             utm_source = CASE
                            WHEN EXCLUDED.utm_source = 'organico' OR EXCLUDED.utm_source = '' THEN clientes.utm_source
                            ELSE EXCLUDED.utm_source
                        END,
             utm_campaign = CASE
                            WHEN EXCLUDED.utm_campaign = '' THEN clientes.utm_campaign
                            ELSE EXCLUDED.utm_campaign
                        END,
             utm_content = CASE
                            WHEN EXCLUDED.utm_content = '' THEN clientes.utm_content
                            ELSE EXCLUDED.utm_content
                        END
             `;
        await pool.end()

        console.log('Datos registrados con éxito en BD');

        const respuestaMeta = await enviarLeadCAPI({
            email: datos['data[Client][email]'],
            telefono: datos['data[Client][cellphone]'],
            valor: datos.cotizacion,
            idMeta: datos.idMeta
        });

        if (!respuestaMeta.success) {
            console.error("Error al enviar a Meta CAPI: ", respuestaMeta.error);
        }
    }
    catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
    }

}