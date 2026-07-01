import { useState, useEffect } from "react";

type DateSplitInputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => void,
    name: string,
    label: string
}

export default function DateSplitInput({ handleChange, name, label }: DateSplitInputProps) {
  // Obtener año actual y los 2 siguientes
  const currentYear = new Date().getFullYear();
  const availableYears = [currentYear, currentYear + 1, currentYear + 2];

  const mesActual = new Date().getMonth() + 1;
  const diaActual = new Date().getDate()

  const obtenerDiasMes = (año: number, mes: number) => new Date(año, mes, 0).getDate();

  // Intentar parsear el valor inicial (YYYY-MM-DD) si existe
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(mesActual);
  const [day, setDay] = useState(diaActual);

  // Cada vez que cambie día, mes o año, notificamos al formulario principal
  useEffect(() => {
    if (day && month && year) {
      const fullDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      // Simulamos el evento de React para que tu handleChange actual funcione igual
      handleChange({target: {name, value: fullDate}},
      );
    } else if (!day && !month && !year) {
      // Si todo está vacío, reseteamos el valor superior
      handleChange({ target: { name, value: "" } });
    }
    // eslint-disable-next-line
  }, [day, month, year, name]);

  return (
    <div className="form-group">
      <label style={{ display: "block" }}>{label}</label>
      
      {/* Contenedor flexible para que se adapte bien a pantallas móviles */}
      <div style={{ display: "flex", gap: "10px", paddingTop: "15px" }}>
        
        {/* DÍA */}
        <select
          className="form-control"
          value={day}
          onChange={(e) => setDay(parseInt(e.target.value))}
          required
          style={{backgroundColor: "#e8f1f8", color: "#267dbc", borderRadius: "10px", padding: "3px 5px", textAlign: "center"}}
        >
          <option value="">Día</option>
          {Array.from({ length: obtenerDiasMes(year, month) }, (_, i) => String(i + 1)).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* MES */}
        <select
          className="form-control"
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
          required
          style={{backgroundColor: "#e8f1f8", color: "#267dbc", borderRadius: "10px", padding: "3px 5px", textAlign: "center"}}
        >
          <option value="">Mes</option>
          {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((m) => (
            <option key={m} value={m}>
              {/* Puedes usar nombres de meses o simplemente números */}
              {new Date(2000, parseInt(m) - 1).toLocaleString("es", { month: "long" })}
            </option>
          ))}
        </select>

        {/* AÑO (Restringido al actual + 2) */}
        <select
          className="form-control"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          required
          style={{backgroundColor: "#e8f1f8", color: "#267dbc", borderRadius: "10px", padding: "3px 5px", textAlign: "center"}}
        >
          <option value="">Año</option>
          {availableYears.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}