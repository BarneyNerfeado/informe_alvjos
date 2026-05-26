import { useState } from "react";
import { ShieldAlert, Package, Cpu } from "lucide-react";

const delitos = [
  {
    articulo: "Art. 2, Inc. 1 y 3",
    nombre: "Acceso Ilícito",
    icon: ShieldAlert,
    gravedad: "ALTA",
    color: "red",
    descripcion: "Castiga al que, sin autorización, acceda a un sistema informático vulnerando las medidas de seguridad.",
    mapeo: "El atacante al utilizar las credenciales robadas de un funcionario público vulneró este artículo. Aunque la credencial era legítima, el atacante no tenía la autorización legal para utilizarla, superando las barreras de control de acceso del sistema de FICOBA.",
    elementos: ["Credenciales robadas de funcionario público", "Acceso sin autorización legal", "Elusión de controles FICOBA"],
  },
  {
    articulo: "Art. 6",
    nombre: "Receptación de Datos Informáticos",
    icon: Package,
    gravedad: "ALTA",
    color: "amber",
    descripcion: "Penaliza a quien comercialice, transfiera o almacene datos obtenidos de forma ilícita.",
    mapeo: "Si el atacante descargó los 1,2 millones de registros para su posterior venta en foros o para ejecutar fraudes masivos de suplantación de identidad, el acto de conservar y lucrar con esa base de datos constituye este delito.",
    elementos: ["Descarga de 1.2M registros", "Posible venta en foros", "Fraudes de suplantación de identidad"],
  },
  {
    articulo: "Art. 8",
    nombre: "Abuso de Dispositivos",
    icon: Cpu,
    gravedad: "MEDIA",
    color: "blue",
    descripcion: "Obtener herramientas, programas o claves diseñadas para cometer delitos informáticos puede ser sancionado con cárcel y multa.",
    mapeo: "El atacante adquirió y utilizó contraseñas y códigos de acceso ajenos con el propósito de cometer el delito de acceso ilícito a los sistemas del Estado.",
    elementos: ["Adquisición de credenciales ajenas", "Uso de claves con fin delictivo", "Ataque a sistemas del Estado"],
  },
];

const colorMap = {
  red:   { border: "border-red-500/30",   bg: "bg-red-500/10",   badge: "bg-red-500/20 text-red-400 border-red-500/30",   icon: "text-red-400",   glow: "shadow-red-500/10" },
  amber: { border: "border-amber-500/30", bg: "bg-amber-500/10", badge: "bg-amber-500/20 text-amber-400 border-amber-500/30", icon: "text-amber-400", glow: "shadow-amber-500/10" },
  blue:  { border: "border-blue-500/30",  bg: "bg-blue-500/10",  badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",  icon: "text-blue-400",  glow: "shadow-blue-500/10" },
};

function CrimeCard({ delito }) {
  const [expandido, setExpandido] = useState(false);
  const c = colorMap[delito.color];

  return (
    <div
      className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${c.border} ${c.glow} ${
        expandido ? `${c.bg} shadow-lg` : "bg-gray-900/50 hover:bg-gray-900/80"
      }`}
      onClick={() => setExpandido(!expandido)}
    >
      {/* Card header */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${
            expandido ? "bg-gray-900/60 border-gray-700" : "bg-gray-800 border-gray-700"
          }`}>
            <delito.icon size={22} className={c.icon} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded border ${c.badge}`}>
                {delito.gravedad}
              </span>
              <span className="text-gray-500 text-xs font-mono">{delito.articulo}</span>
            </div>
            <h3 className="text-white font-bold text-base">{delito.nombre}</h3>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">{delito.descripcion}</p>
          </div>
        </div>

        <div className="mt-3 text-right">
          <span className="text-xs text-gray-600">{expandido ? "▲ Cerrar" : "▼ Ver mapeo del ataque"}</span>
        </div>
      </div>

      {/* Expandido */}
      {expandido && (
        <div className="px-5 pb-5 border-t border-gray-800/50 space-y-4 pt-4">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              Mapeo de la acción al caso:
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">{delito.mapeo}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              Elementos constitutivos:
            </p>
            <ul className="space-y-1.5">
              {delito.elementos.map((el, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    delito.color === "red" ? "bg-red-400" : delito.color === "amber" ? "bg-amber-400" : "bg-blue-400"
                  }`} />
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SeccionDelitos() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600 font-mono">03</span>
          <span className="w-8 h-px bg-gray-700" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Delitos Informáticos</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Tipificación según Ley 21.459</h2>
        <p className="text-gray-500 text-sm mt-1">
          Haz clic en cada tarjeta para ver el mapeo detallado de la acción del atacante.
        </p>
      </div>

      {/* Indicador ley */}
      <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-lg">
        <ShieldAlert size={16} className="text-emerald-400 flex-shrink-0" />
        <p className="text-gray-400 text-xs">
          Todos los delitos se tipifican bajo la{" "}
          <span className="text-white font-semibold">Ley 21.459 — Ley de Delitos Informáticos (Chile)</span>,
          aplicada al caso FICOBA independientemente del territorio donde ocurrió el incidente.
        </p>
      </div>

      {/* Crime cards */}
      <div className="space-y-4">
        {delitos.map((d, i) => (
          <CrimeCard key={i} delito={d} />
        ))}
      </div>
    </div>
  );
}
