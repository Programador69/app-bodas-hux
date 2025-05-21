import type { Estado, Action } from "../../utilidades/types";

export function reducer(state: Estado, action: Action) {
    switch (action.type) {
        case 'pr1':
            return { ...state, pr1: action.value };
        case 'pr2':
            return { ...state, pr2: action.value };
        case 'pr3':
            return { ...state, pr3: action.value };
        case 'pr4':
            return { ...state, pr4: action.value };
        case 'pr5':
            return { ...state, pr5: action.value };
        case 'extras':
            if (!action.payload) {
                throw new Error("Payload is required for 'extras' action.");
            }
            return { ...state, extras: { suma: action.payload.suma, opciones: action.payload.opciones } };
        default:
            throw new Error();
    }

}