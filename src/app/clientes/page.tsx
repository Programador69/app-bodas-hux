"use client";
import "./page.css";
import { useState } from "react";

export default function Clientes() {
    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState("");

    // const obtenerDatos = () => {
    //     const info = informacion;
    // }

    const validar = () => {
        const contra = password;
        console.log(contra);
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
                                informacion.map((item, index) => (
                                    <ul key={index}>
                                        <li>{item.nombre}</li>
                                        <li>{item.apellido}</li>
                                        <li>{item.celular}</li>
                                        <li>{item.correo}</li>
                                        <li>${item.cotizacion.toLocaleString("es-MX")}</li>
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

const informacion = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        celular: "1234567890",
        correo: "ej@ej.com",
        cotizacion: 10000,
        invitados: "Solo Nosotros 2",
        ceremonia: "Simbólica",
        decoracion: "Sencilla y Natural",
        musica: "Solo Algo de fondo",
        menu: "Solo canapes y bocadillos",
        extras: "Fotografia, Video, ",
    },
    {
        nombre: "Pedro",
        apellido: "Gómez",
        celular: "0987654321",
        correo: "ejemplo@jsmsm.com",
        cotizacion: 20000,
        invitados: "Menos de 15 invitados",
        ceremonia: "Religiosa",
        decoracion: "Intima con Detalles",
        musica: "Un momento especial",
        menu: "Taquiza o comida típica mexicana",
        extras: "Fotografia, Video, Maquillaje, ",
    },
    {
        nombre: "Pedro",
        apellido: "Gómez",
        celular: "0987654321",
        correo: "ejemplo@jsmsm.com",
        cotizacion: 20000,
        invitados: "Menos de 15 invitados",
        ceremonia: "Religiosa",
        decoracion: "Intima con Detalles",
        musica: "Un momento especial",
        menu: "Taquiza o comida típica mexicana",
        extras: "Fotografia, Video, Maquillaje, ",
    },
    {
        nombre: "Pedro",
        apellido: "Gómez",
        celular: "0987654321",
        correo: "ejemplo@jsmsm.com",
        cotizacion: 20000,
        invitados: "Menos de 15 invitados",
        ceremonia: "Religiosa",
        decoracion: "Intima con Detalles",
        musica: "Un momento especial",
        menu: "Taquiza o comida típica mexicana",
        extras: "Fotografia, Video, Maquillaje, ",
    },
    {
        nombre: "Pedro",
        apellido: "Gómez",
        celular: "0987654321",
        correo: "ejemplo@jsmsm.com",
        cotizacion: 20000,
        invitados: "Menos de 15 invitados",
        ceremonia: "Religiosa",
        decoracion: "Intima con Detalles",
        musica: "Un momento especial",
        menu: "Taquiza o comida típica mexicana",
        extras: "Fotografia, Video, Maquillaje, ",
    }
]