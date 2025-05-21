"use server";
import bcrypt from "bcryptjs";
import { createPool } from "@vercel/postgres";

const URL = process.env.DATABASE_URL;

export async function validarClave(contra: string) {
    try {
        const pool = createPool({
            connectionString: URL,
        })

        if (!pool) {
            throw new Error("La conexión a la base de datos no está inicializada")
        }

        const {rows} = await pool.sql`SELECT clave FROM contra`;
        await pool.end()

        const contraBD = await rows[0].clave;

        const res = await bcrypt.compare(contra, contraBD);

        return res;
    }
    catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
    }

}