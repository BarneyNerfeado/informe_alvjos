import { useState } from "react";
import { ChevronDown, ChevronUp, Scale, Globe, Flag, Network } from "lucide-react";

const normas = [
  {
    id: 1,
    icon: Flag,
    tag: "NACIONAL",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    nombre: "Ley 21.459",
    subtitulo: "Ley de Delitos Informáticos — Chile",
    acento: "border-blue-500/40",
    desc: "Penaliza el ataque en sí. Aplica directamente sobre la conducta concreta del atacante.",
    justificacion: "El atacante obtuvo las credenciales de acceso de un funcionario público autorizado para usar la base de datos y luego utilizó esas credenciales para explorar su contenido, lo que significa una vulneración de las medidas de seguridad y un acceso no autorizado establecido en esta ley.",
    cita: '"Obtuvo las credenciales de acceso de un funcionario público autorizado para usar la base de datos y luego utilizó esas credenciales para explorar su contenido"',
  },
  {
    id: 2,
    icon: Scale,
    tag: "NACIONAL",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    nombre: "Ley 19.628",
    subtitulo: "Protección de la Vida Privada — Chile",
    acento: "border-blue-500/40",
    desc: "Regula el tratamiento ilegal de la información robada y la obligación de privacidad vulnerada.",
    justificacion: "Se expuso información vinculada a 1.2 millones de cuentas, incluyendo el número de cuenta bancaria internacional (IBAN), el nombre y apellido del titular, y su dirección, los cuales representan datos personales protegidos cuya obligación de privacidad fue vulnerada.",
    cita: '"[...] número de cuenta bancaria internacional (IBAN), el nombre y apellido del titular, su dirección"',
  },
  {
    id: 3,
    icon: Globe,
    tag: "INTERNACIONAL",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    nombre: "GDPR",
    subtitulo: "Reglamento General de Protección de Datos — Unión Europea",
    acento: "border-emerald-500/40",
    desc: "Norma internacional que rige el estándar de seguridad que debió tener la institución vulnerada.",
    justificacion: "Esta normativa se aplica debido a la intrusión al registro nacional de cuentas bancarias de Francia, FICOBA, procesando datos de ciudadanos residentes en Francia, dentro del territorio de la Unión Europea.",
    cita: '"Accedió al registro nacional de cuentas bancarias de Francia, FICOBA"',
  },
  {
    id: 4,
    icon: Network,
    tag: "INTERNACIONAL",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    nombre: "Convenio de Budapest",
    subtitulo: "Convenio sobre la Ciberdelincuencia — Consejo de Europa",
    acento: "border-emerald-500/40",
    desc: "Tratado internacional clave para la cooperación policial en incidentes transfronterizos.",
    justificacion: "Al ser un incidente internacional donde el atacante obtuvo las credenciales para usar la base de datos, este tratado es fundamental para garantizar la cooperación policial y poder identificar al responsable del ataque.",
    cita: '"Obtuvo las credenciales [...] para usar la base de datos"',
  },
];

function AcordeonNorma({ norma }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        abierto ? `${norma.acento} bg-gray-900/80` : "border-gray-800 bg-gray-900/40"
      } hover:border-gray-700`}
    >
      <button
        className="w-full text-left px-5 py-4 flex items-center gap-4"
        onClick={() => setAbierto(!abierto)}
      >
        <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0">
          <norma.icon size={18} className="text-gray-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded border ${norma.tagColor}`}>
              {norma.tag}
            </span>
            <span className="text-white font-bold text-sm">{norma.nombre}</span>
          </div>
          <p className="text-gray-500 text-xs truncate">{norma.subtitulo}</p>
        </div>
        <div className="flex-shrink-0 text-gray-500">
          {abierto ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {abierto && (
        <div className="px-5 pb-5 space-y-4 border-t border-gray-800/50">
          <p className="text-gray-300 text-sm leading-relaxed pt-4">{norma.desc}</p>

          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              Justificación con referencia al caso:
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{norma.justificacion}</p>
          </div>

          <div className="pl-4 border-l-2 border-emerald-500/50">
            <p className="text-emerald-300/80 text-xs italic leading-relaxed">{norma.cita}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SeccionMarco() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600 font-mono">02</span>
          <span className="w-8 h-px bg-gray-700 inline-block" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Marco Normativo</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Leyes y Regulaciones Aplicables</h2>
        <p className="text-gray-500 text-sm mt-1">
          4 normas justificadas — nacionales e internacionales. Haz clic en cada una para ver la justificación detallada.
        </p>
      </div>

      {/* Timeline visual */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {["Chile", "Chile", "UE", "Europa"].map((area, i) => (
          <div key={i} className="text-center">
            <div className="text-xs text-gray-600 mb-1 font-mono">0{i + 1}</div>
            <div className="h-1 rounded-full bg-gradient-to-r from-blue-500/50 to-emerald-500/50" />
            <div className="text-[10px] text-gray-600 mt-1">{area}</div>
          </div>
        ))}
      </div>

      {/* Acordeones */}
      <div className="space-y-3">
        {normas.map((norma) => (
          <AcordeonNorma key={norma.id} norma={norma} />
        ))}
      </div>
    </div>
  );
}
