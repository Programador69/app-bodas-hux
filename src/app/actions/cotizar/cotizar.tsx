import type { Estado } from "../../utilidades/types";

export function cotizar (state: Estado) {
    const invitados = state.pr1 == 11000 ? 2 : state.pr1 == 15000 ? 14 : state.pr1 == 50000 ? 50 : state.pr1 == 75000 ? 100 : state.pr1 == 85000 ? 150 : state.pr1 == 100000 ? 150 : 0;
    const decoracion = invitados * state.pr3;
    const menu = invitados * state.pr5;

    const cotizacion = state.pr1 + state.pr2 + decoracion + state.pr4 + menu + state.extras.suma;
    
    return cotizacion;
}