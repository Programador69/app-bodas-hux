"use client";
import "./formulario.css";
import type { EstadoFormulario, Formulario } from "../../utilidades/types";
import { useState } from "react";
import { enviarDatos } from "@/app/actions";
import { useTranslations } from "next-intl";
import DateSplitInput from "./selectorFechas";
import * as fpixel  from "../../utilidades/fpixel";

type SimulatedEvent = {
  target: {
    name: string;
    value: string;
  };
};

declare const grecaptcha: any;

export function Formulario({ setBoton, setNombre, datos }: Formulario) {
  const [formData, setFormData] = useState<EstadoFormulario>({
    "data[Client][first_name]": "",
    "data[Client][last_name]": "",
    "data[Client][cellphone]": "",
    "data[Client][email]": "",
    "data[Client][fecha_de_la_boda]": "",
    "data[Client][nombre_de_la_pareja]": ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | SimulatedEvent) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captchaToken = grecaptcha.getResponse();

    fpixel.event("Lead", {
      value: datos.cotizacion,
      currency: "MXN"
    });

    try {
      await enviarDatos({
        action: e.currentTarget.action,
        method: e.currentTarget.method,
        formData,
        datos,
        captchaToken
      });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    } finally {
      setBoton(true);
      setNombre(formData["data[Client][first_name]"]);
    }
  };

  const t = useTranslations("formulario");

  return (
    <div className="formulario-contenedor">
      <header>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </header>

      <form
        action="https://incrementacrm.com/api/widget/web-form/4a067435bbcfffc3c44939e8ea42e4e512e0d978"
        method="post"
        className="container"
        id="ClientWebFormForm"
        acceptCharset="utf-8"
        onSubmit={handleSubmit}
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_method" value="POST" />
        </div>

        <div className="form-group">
          <label>{t("labelNombre")}</label>
          <input
            name="data[Client][first_name]"
            className="form-control"
            placeholder={t("nombre")}
            type="text"
            value={formData["data[Client][first_name]"]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t("labelApellido")}</label>
          <input
            name="data[Client][last_name]"
            className="form-control"
            placeholder={t("apellido")}
            type="text"
            value={formData["data[Client][last_name]"]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t("labelWhats")}</label>
          <input
            name="data[Client][cellphone]"
            className="form-control"
            placeholder={t("celular")}
            type="text"
            value={formData["data[Client][cellphone]"]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t("labelEmail")}</label>
          <input
            name="data[Client][email]"
            className="form-control"
            placeholder={t("email")}
            type="email"
            value={formData["data[Client][email]"]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t("labelPareja")}</label>
          <input
            name="data[Client][nombre_de_la_pareja]"
            className="form-control"
            placeholder="Nombre de la pareja"
            type="text"
            value={formData["data[Client][nombre_de_la_pareja]"]}
            onChange={handleChange}
            required
          />
        </div>

        <DateSplitInput handleChange={handleChange} name="data[Client][fecha_de_la_boda]" label={t("labelFecha")} />

        <input
          type="hidden"
          name="data[Client][cuantos_invitados_estas_considerando_how_many_guests_are_you_considering]"
          value="0"
        />
        <div style={{ display: "flex", justifyContent: "center" }} className="form-group center-block">
          <div
            className="g-recaptcha center-block"
            data-sitekey="6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK"
          ></div>
        </div>

        <div className="submit">
          <input className="btn btn-default" type="submit" value={t("boton")} />
        </div>
      </form>
    </div>
  );
}
