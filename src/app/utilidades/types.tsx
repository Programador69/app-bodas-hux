export type Action = {
    type: string;
    value: number;
    payload?: {
        suma: number | 0;
        opciones: string | "";
    }
}

export type Estado = {
    pr1: number;
    pr2: number;
    pr3: number;
    pr4: number;
    pr5: number;
    extras: {suma: number, opciones: string};
    pr7: number;
    cotizacion?: number;
}

export type Respuesta = {
    cotizacion: number;
    boton: React.Dispatch<React.SetStateAction<boolean>>;
    setIteracion: React.Dispatch<React.SetStateAction<number>>;
    nombre: string
}

export type Formulario = {
    setBoton: React.Dispatch<React.SetStateAction<boolean>>;
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    datos: Estado;
}

export type EstadoFormulario = {    
    'data[Client][first_name]': string;
    'data[Client][last_name]': string;
    'data[Client][cellphone]': string;
    'data[Client][email]': string;
    'data[Client][fecha_de_la_boda]': string;
    'data[Client][nombre_de_la_pareja]': string;

    recaptchaToken: string | null;
}