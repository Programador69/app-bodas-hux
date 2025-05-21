"use server";
import { createPool } from "@vercel/postgres";

export async function obtenerDatosBD()  {
    try {
        const pool = createPool({
            connectionString: process.env.DATABASE_URL,
        })

        if (!pool) {
            throw new Error("La conexión a la base de datos no está inicializada")
        }

        const { rows } = await pool.sql`SELECT * FROM clientes`;
        await pool.end()

        return rows;
    }
    catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
    }
}