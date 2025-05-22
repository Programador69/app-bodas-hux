"use client";
import "./formulario.css";
import type { Formulario} from "../../utilidades/types";
import { useState } from "react";
import { enviarDatos } from "@/app/actions";

export function Formulario({setBoton, setNombre, datos}: Formulario) {
   const [formData, setFormData] = useState({
    'data[Client][first_name]': '',
    'data[Client][last_name]': '',
    'data[Client][cellphone]': '',
    'data[Client][email]': '',
  });


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const action = e.currentTarget.action;
      const method = e.currentTarget.method;
      await enviarDatos({action, method, formData, datos});

    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
    finally {
      setBoton(true);
      setNombre(formData['data[Client][first_name]']);
    }
  }

  return (
    <>
    <header>
      <h1>¿List@s para ver tu sueño convertido en inversión?</h1>
      <h2 className="h2Formulario">Déjanos tus datos y te mostraremos el estimado perzonalizado para la boda que imaginas en Huatulco. Este es solo el primer paso para hacerla realidad. ✨ 🌴 💍 </h2>
    </header>
      <form
        action="https://incrementacrm.com/api/widget/web-form/4a067435bbcfffc3c44939e8ea42e4e512e0d978"
        method="post"
        className="container"
        id="ClientWebFormForm"
        acceptCharset="utf-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_method" value="POST" />
        </div>
        <div className="form-group">
          <label htmlFor="ClientFirstName"></label>
          <input
            value={formData['data[Client][first_name]']}
            onChange={(e) => handleChange(e)}
            name="data[Client][first_name]"
            className="form-control"
            placeholder="Nombre(s)"
            type="text"
            id="ClientFirstName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ClientLastName"></label>
          <input
            value={formData['data[Client][last_name]']}
            onChange={(e) => handleChange(e)}
            name="data[Client][last_name]"
            className="form-control"
            placeholder="Apellidos"
            type="text"
            id="ClientLastName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ClientCellphone"></label>
          <input
          value={formData['data[Client][cellphone]']}
            onChange={(e) => handleChange(e)}
            name="data[Client][cellphone]"
            className="form-control"
            placeholder="Celular"
            type="text"
            id="ClientCellphone"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ClientEmail"></label>
          <input
            value={formData['data[Client][email]']}
            onChange={(e) => handleChange(e)}
            name="data[Client][email]"
            className="form-control"
            placeholder="Email"
            type="email"
            id="ClientEmail"
            required
          />
        </div>

        <div className="form-group center-block" id="reCaptcha">
          <div className="g-recaptcha center-block" data-sitekey="6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK"></div>
	      </div>
        
        <div className="submit">
          <input className="btn btn-default" type="submit" value="Número mágico"/>
        </div>
      </form>
    </>
  );
}