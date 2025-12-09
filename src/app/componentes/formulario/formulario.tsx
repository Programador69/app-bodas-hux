"use client";
import "./formulario.css";
import type { EstadoFormulario, Formulario } from "../../utilidades/types";
import { useState, useEffect } from "react";
import { enviarDatos } from "@/app/actions";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      render: (
        container: string | HTMLElement,
        parameters: Record<string, unknown>
      ) => void;
      reset: (widgetId?: string | number) => void;
    };
  }
}

export function Formulario({ setBoton, setNombre, datos }: Formulario) {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const [formData, setFormData] = useState<EstadoFormulario>({
    "data[Client][first_name]": "",
    "data[Client][last_name]": "",
    "data[Client][cellphone]": "",
    "data[Client][email]": "",
    "data[Client][fecha_de_la_boda]": "",
    "data[Client][nombre_de_la_pareja]": "",
    recaptchaToken: null,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!window.grecaptcha) {
        setRecaptchaError(
          "No se pudo cargar el reCAPTCHA. Por favor, recarga la página."
        );
      }
    }, 3000);

    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render("reCaptcha", {
          sitekey: "6LfhmSYsAAAAANxIyoDJeqAABJY8NRBVPzhA3fUA",
          callback: (token: string) => {
            setRecaptchaToken(token);
            setFormData((prev) => ({ ...prev, recaptchaToken: token }));
            setRecaptchaError(null);
          },
        });
      });
    }

    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setRecaptchaError(
        "Por favor completa el reCAPTCHA antes de enviar el formulario."
      );
      return;
    }

    try {
      await enviarDatos({
        action: e.currentTarget.action,
        method: e.currentTarget.method,
        formData,
        datos,
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
    <>
      <header>
        <h1>{t("h1")}</h1>
        <h2 className="h2Formulario">{t("h2")}</h2>
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
          <input
            name="data[Client][fecha_de_la_boda]"
            className="form-control"
            type="date"
            value={formData["data[Client][fecha_de_la_boda]"]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
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

        <div className="form-group center-block" id="reCaptcha">
          {!recaptchaToken && recaptchaError && (
            <span style={{ color: "red" }}>{recaptchaError}</span>
          )}
          <div
            className="g-recaptcha center-block"
            data-sitekey="6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK"
          ></div>
        </div>

        <div className="submit">
          <input className="btn btn-default" type="submit" value="Enviar" />
        </div>
      </form>
    </>
  );
}
