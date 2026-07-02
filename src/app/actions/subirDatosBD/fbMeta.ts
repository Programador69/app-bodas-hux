// app/acciones.ts
'use server';

type LeadCAPIProps = {
  email: string;
  telefono?: string;
  valor: number;
  idMeta: string;
}

export async function enviarLeadCAPI(datos: LeadCAPIProps) {
  const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN; // Tu token privado de Meta

  if (!ACCESS_TOKEN || !PIXEL_ID) {
    console.error("Faltan las credenciales de Meta en las variables de entorno");
    return { success: false, error: "Error de configuración" };
  }

  // Meta requiere hashes SHA-256 para datos sensibles como emails
  // (Nota: Asegúrate de normalizar y hashear si es necesario, o usa librerías como 'crypto')
  
  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000), // Timestamp en segundos
        event_id: datos.idMeta,
        action_source: 'website',
        user_data: {
          // Meta recomienda enviar mínimo el email (hasheado o plano si usas su SDK)
          email: [datos.email.trim().toLowerCase()], 
        },
        custom_data: {
          value: Number(datos.valor), // <- AQUÍ ENVIAMOS EL VALOR CORREGIDO
          currency: 'MXN'             // <- Y LA DIVISA
        }
      }
    ]
  };

  try {
    const respuesta = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const resultado = await respuesta.json();
    return { success: true, data: resultado };
  } catch (error) {
    console.error("Error enviando a Conversions API:", error);
    return { success: false, error: "Error en el servidor" };
  }
}