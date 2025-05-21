"use server";
import { createPool } from "@vercel/postgres";

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
}

export async function subirDatosBD(datos: Datos) {
    try {
        const pool = createPool({
            connectionString: URL,
        })

        if (!pool) {
            throw new Error("La conexión a la base de datos no está inicializada")
        }

        await pool.sql`INSERT INTO clientes (nombre, apellido, celular, correo, cotizacion, invitados, ceremonia, decoracion, musica, menu, extras) VALUES (${datos['data[Client][first_name]']}, ${datos['data[Client][last_name]']}, ${datos['data[Client][cellphone]']}, ${datos['data[Client][email]']}, ${datos.cotizacion}, ${datos.invitados}, ${datos.ceremonia}, ${datos.decoracion}, ${datos.musica}, ${datos.menu}, ${datos.extras})`;
        await pool.end()

        console.log('Datos registrados con éxito');
    }
    catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
    }

}