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
    nombre: string
}

export type DatosEnviar = {
    action: string;
    method: string;
    formData: EstadoFormulario;
    captchaToken: any;
    utm_source: string;
    utm_campaign: string;
    utm_content: string;
}

export type Formulario = {
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    setDatosEnviar: React.Dispatch<React.SetStateAction<DatosEnviar>>;
    setIteracion: React.Dispatch<React.SetStateAction<number>>;
}

export type EstadoFormulario = {    
    'data[Client][first_name]': string;
    'data[Client][last_name]': string;
    'data[Client][cellphone]': string;
    'data[Client][email]': string;
    'data[Client][fecha_de_la_boda]': string;
    'data[Client][nombre_de_la_pareja]': string;

    // recaptchaToken: string | null;
}