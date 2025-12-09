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
      render: (container: string | HTMLElement, parameters: Record<string, unknown>) => void;
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
    fechaBoda: "",
    nombrePareja: "",
    recaptchaToken: null,
  });

  useEffect(() => {
    // Esperamos un poco para verificar si grecaptcha está disponible
    const timeout = setTimeout(() => {
      if (!window.grecaptcha) {
        setRecaptchaError("No se pudo cargar el reCAPTCHA. Por favor, recarga la página.");
      }
    }, 3000); // 3 segundos para dar tiempo a que cargue el script
  
    if (window.grecaptcha) {
      const renderRecaptcha = () => {
        window.grecaptcha.render('reCaptcha', {
          sitekey: '6LfhmSYsAAAAANxIyoDJeqAABJY8NRBVPzhA3fUA',
          callback: (token: string) => {
            setRecaptchaToken(token);
            setRecaptchaError(null); // si carga correctamente, removemos error
          },
        });
      };
  
      renderRecaptcha();
    }
  
    return () => clearTimeout(timeout);
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setRecaptchaError("Por favor completa el reCAPTCHA antes de enviar el formulario.");
      return;
    }

  
    try {
      const action = e.currentTarget.action;
      const method = e.currentTarget.method;

      // 🚀 Enviar correctamente como form-urlencoded
      await enviarDatos({
        action,
        method,
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
      <form action="https://incrementacrm.com/api/widget/web-form/4a067435bbcfffc3c44939e8ea42e4e512e0d978" method="post" className="container" id="ClientWebFormForm" acceptCharset="utf-8" onSubmit={(e) => handleSubmit(e)}>
      <div style={{display: "none"}}>
        <input type="hidden" name="_method" value="POST"/>
      </div>
      <div className="form-group">
        <input name="data[Client][first_name]" className="form-control" placeholder={t("nombre")} type="text" id="ClientFirstName" value={formData["data[Client][first_name]"]}
            onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <input name="data[Client][last_name]" className="form-control" placeholder={t("apellido")} type="text" id="ClientLastName" value={formData["data[Client][last_name]"]}
            onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <input name="data[Client][cellphone]" className="form-control" placeholder={t("celular")} type="text" id="ClientCellphone" value={formData["data[Client][cellphone]"]}
            onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <input name="data[Client][email]" className="form-control" placeholder={t("email")} type="email" id="ClientEmail" value={formData["data[Client][email]"]}
            onChange={handleChange} required/>
      </div>
      <div className="form-group" id="divFechaBoda">
        <label htmlFor="DiaBoda">{t("fecha")}:</label>
        <input name="fechaBoda" className="form-control" type="date" id="DiaBoda" value={formData["fechaBoda"]}
            onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <input name="nombrePareja" className="form-control" placeholder="Nombre de la pareja" type="text" id="ClientNombreDeLaPareja"  value={formData["nombrePareja"]}
            onChange={handleChange} required/>
      </div>

      <div className="form-group center-block" id="reCaptcha">
        {recaptchaToken && <span>Token listo para enviar al servidor</span>}
        {!recaptchaToken && recaptchaError && (
          <span style={{ color: "red" }}>{recaptchaError}</span>
        )}
        <div className="g-recaptcha center-block" data-sitekey="6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK"></div>
      </div>


      <div className="submit">
        <input className="btn btn-default" type="submit" value="Enviar"/>
      </div>
      </form>

    </>
  );
}

{/* <form
        action="https://incrementacrm.com/api/widget/web-form/4a067435bbcfffc3c44939e8ea42e4e512e0d978"
        method="post"
        className="container"
        id="ClientWebFormForm"
        acceptCharset="utf-8"
        onSubmit={(e) => handleSubmit(e)}
      >
       
        <input
          type="hidden"
          name="g-recaptcha-response"
          value={formData.recaptchaToken ?? ""}
        />

        <div className="form-group">
          <input
            value={formData["data[Client][first_name]"]}
            onChange={handleChange}
            name="data[Client][first_name]"
            className="form-control"
            placeholder={t("nombre")}
            type="text"
            id="ClientFirstName"
            required
          />
        </div>

        <div className="form-group">
          <input
            value={formData["data[Client][last_name]"]}
            onChange={handleChange}
            name="data[Client][last_name]"
            className="form-control"
            placeholder={t("apellido")}
            type="text"
            id="ClientLastName"
            required
          />
        </div>

        <div className="form-group">
          <input
            value={formData["data[Client][cellphone]"]}
            onChange={handleChange}
            name="data[Client][cellphone]"
            className="form-control"
            placeholder={t("celular")}
            type="tel" // ✅ cambiado de number a tel
            id="ClientCellphone"
            required
          />
        </div>

        <div className="form-group">
          <input
            value={formData["data[Client][email]"]}
            onChange={handleChange}
            name="data[Client][email]"
            className="form-control"
            placeholder={t("email")}
            type="email"
            id="ClientEmail"
            required
          />
        </div>

        <div className="form-group" id="divFechaBoda">
          <label htmlFor="DiaBoda">{t("fecha")}:</label>
          <input
            value={formData["fechaBoda"]}
            onChange={handleChange}
            name="fechaBoda"
            className="form-control"
            type="date"
            id="DiaBoda"
          />
        </div>

        <div className="form-group">
          <input
            value={formData["nombrePareja"]}
            onChange={handleChange}
            name="nombrePareja"
            className="form-control"
            type="text"
            placeholder={t("nombre-pareja")}
            id="NombrePareja"
          />
        </div>

        <div className="form-group center-block" id="reCaptcha"></div>

        <div className="submit">
          <input
            className="btn btn-default"
            type="submit"
            value={t("boton")}
          />
        </div>
      </form> */}