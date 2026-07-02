"use client";
import * as fpixel  from "../../utilidades/fpixel";

export const subirDatosNavegador = async (cotizacion: number) => {
    fpixel.event("Lead", {
        value: cotizacion,
        currency: "MXN"
    });
}