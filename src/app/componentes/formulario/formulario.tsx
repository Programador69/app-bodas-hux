"use client";
import "./formulario.css";
import type { Formulario} from "../../utilidades/types";
import { useState, useEffect } from "react";
import { enviarDatos } from "@/app/actions";

// Add grecaptcha to the Window type
declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      render: (container: string | HTMLElement, parameters: Record<string, unknown>) => void;
      reset: (widgetId?: string | number) => void;
    };
  }
}

export function Formulario({setBoton, setNombre, datos}: Formulario) {
   const [formData, setFormData] = useState<{
    'data[Client][first_name]': string;
    'data[Client][last_name]': string;
    'data[Client][cellphone]': string;
    'data[Client][email]': string;
    recaptchaToken: string | null;
  }>({
    'data[Client][first_name]': '',
    'data[Client][last_name]': '',
    'data[Client][cellphone]': '',
    'data[Client][email]': '',
    recaptchaToken: null,
  });

  // Carga el script de reCAPTCHA prueba uno
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://www.google.com/recaptcha/api.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   // Asegúrate de que reCAPTCHA se renderice cuando el script esté cargado
  //   script.onload = () => {
  //     if (window.grecaptcha) {
  //       window.grecaptcha.ready(function() {
  //         window.grecaptcha.render('reCaptcha', {
  //           'sitekey': '6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK',
  //           'callback': (token: string) => {
  //             setFormData(prev => ({ ...prev, recaptchaToken: token }));
  //           },
  //           'expired-callback': () => {
  //             setFormData(prev => ({ ...prev, recaptchaToken: null }));
  //           }
  //         });
  //       });
  //     }
  //   };

  //   return () => {
  //     // Limpia el script cuando el componente se desmonte
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // Prueba dos
//   useEffect(() => {
//   if (window.grecaptcha) {
//     window.grecaptcha.ready(function() {
//       // Si ya hay un reCAPTCHA renderizado, lo reseteamos o lo evitamos.
//       // Una forma de evitar doble renderizado si hay un problema:
//       const reCaptchaElement = document.getElementById('reCaptcha');
//       if (reCaptchaElement && reCaptchaElement.children.length === 0) {
//         window.grecaptcha.render('reCaptcha', {
//           'sitekey': '6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK',
//           'callback': (token: string) => {
//             setFormData(prev => ({ ...prev, recaptchaToken: token }));
//           },
//           'expired-callback': () => {
//             setFormData(prev => ({ ...prev, recaptchaToken: null }));
//           }
//         });
//       }
//     });
//   }
// }, []);

  // Prueba tres
  useEffect(() => {
    console.log("Cargando script de reCAPTCHA");
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Pequeño retardo para asegurar que grecaptcha esté completamente disponible
      setTimeout(() => {
        if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
          window.grecaptcha.ready(function() {
            // Importante: Asegurarse de que no haya ya un widget en ese elemento
            // La verificación `children.length === 0` es clave aquí
            const recaptchaElement = document.getElementById('reCaptcha');
            if (recaptchaElement && recaptchaElement.children.length === 0) {
              try {
                window.grecaptcha.render('reCaptcha', {
                  'sitekey': '6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK',
                  'callback': (token: string) => {
                    setFormData(prev => ({ ...prev, recaptchaToken: token }));
                  },
                  'expired-callback': () => {
                    setFormData(prev => ({ ...prev, recaptchaToken: null }));
                  }
                });
              } catch (renderError) {
                console.error("Error al renderizar reCAPTCHA:", renderError);
                // Esto te dará más detalles si el problema es en la llamada a render()
              }
            } else if (recaptchaElement) {
                console.warn("reCAPTCHA placeholder element is not empty, skipping render.", recaptchaElement.innerHTML);
            } else {
                console.error("reCAPTCHA placeholder element 'reCaptcha' not found.");
            }
          });
        } else {
            console.error("window.grecaptcha not available after script load.");
        }
      }, 100); // Pequeño retardo
    };

    return () => {
      // Limpia el script y el widget si existe
      if (window.grecaptcha) {
        const widgetId = document.getElementById('reCaptcha')?.querySelector('iframe')?.id;
        if (widgetId) {
          try {
            window.grecaptcha.reset(widgetId); // Intenta resetear si hay un widget
          } catch (e) {
            // No hacer nada si falla el reset (por ejemplo, si ya no existe)
            console.error("Error al resetear reCAPTCHA:", e);
          }
        }
      }
      // Asegúrate de que el script se remueva limpiamente
      if (document.body.contains(script)) {
          document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Valida si el token de reCAPTCHA existe
    // if (!formData.recaptchaToken) {
    //   alert('Por favor, completa el reCAPTCHA.');
    //   return;
    // }

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

          {/* <div className="g-recaptcha center-block" data-sitekey="6LeOg0UrAAAAAGHqDkU2-J2A4URToTltxHAaJGkK">
            </div> */}
        <div className="form-group center-block" id="reCaptcha"></div>
        
        <div className="submit">
          <input className="btn btn-default" type="submit" value="Número mágico"/>
        </div>
      </form>
    </>
  );
}