"use client";
import "./page.css";
import { useState, useEffect } from "react";
import { validarClave, obtenerDatosBD } from "../../actions";
import { QueryResultRow } from "@vercel/postgres";

export default function Clientes() {
    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState("");
    const [informacion, setInformacion] = useState<QueryResultRow[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const info: QueryResultRow[] | undefined = await obtenerDatosBD();
            if (info) {
                setInformacion(info);
            }
        };

        if (!isValid) {
            return;
        }

        fetchData();
    }, [isValid]);

    const validar = async () => {
        const contra = password;

        const res = await validarClave(contra);

        if (!res) {
            alert("Contraseña incorrecta");
            return;
        }
        setIsValid(true);
    }

    return (
        <div className="respuestas">
            {
                !isValid ? (
                    <div className="divClientes">
                        <h1>Ingresa la contraseña para poder ver los resultados</h1>
                        <input className="inputClientes" type="password" placeholder="ultra-secreta" required onChange={(e) => setPassword(e.target.value)} />
                        <button className="botonClientes" onClick={validar}>Validar</button>
                    </div>
                    ) : (
                        <div className="contenedorClientes">
                            <h1>Resultados de la cotización</h1>
                            <ul>
                                <li>Nombre</li>
                                <li>Apellido</li>
                                <li>Celular</li>
                                <li>Correo</li>
                                <li>Cotización</li>
                                <li>Desgloce</li>
                            </ul>
                            {
                                // Aqui haremos un ul con los datos de la base de datos
                                // y los mostraremos en una tabla
                                informacion.map((item) => (
                                    <ul key={item.is}>
                                        <li>{item.nombre}</li>
                                        <li>{item.apellido}</li>
                                        <li>{item.celular}</li>
                                        <li>{item.correo}</li>
                                        <li>${parseInt(item.cotizacion).toLocaleString("es-MX")}</li>
                                        <ul className="ulDesgloce">
                                            <li><span>Invitados:</span> {item.invitados}</li>
                                            <li><span>Ceremonia:</span> {item.ceremonia}</li>
                                            <li><span>Decoración:</span> {item.decoracion}</li>
                                            <li><span>Música:</span> {item.musica}</li>
                                            <li><span>Menú:</span> {item.menu}</li>
                                            <li><span>Extras:</span> {item.extras}</li>
                                        </ul>
                            </ul>
                                ))
                            }
                        </div>
                    )
            }
        </div>
    );
}