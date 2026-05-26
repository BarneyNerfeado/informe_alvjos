const marcos = [
  {
    nombre: "Ley 21.459",
    alcance: "Nacional. Aplica a delitos cometidos en Chile o que afecten a sistemas en territorio chileno.",
    jurisdiccion: "Chile",
    sujeto: "Cualquier persona natural o jurídica (el atacante) que cometa un delito informático.",
    sanciones: "Penas de cárcel (presidio menor a mayor) y multas económicas asociadas al delito.",
    aplicabilidad: "ALTA",
    aplicabilidadDesc: "Aplica directamente para tipificar y perseguir penalmente al atacante por el acceso ilícito usando credenciales robadas.",
    color: "blue",
  },
  {
    nombre: "Ley 19.628",
    alcance: "Nacional. Regula el tratamiento de datos de personas naturales en territorio chileno.",
    jurisdiccion: "Chile",
    sujeto: "Organismos públicos y empresas privadas chilenas que manejen bases de datos.",
    sanciones: "Multas administrativas en UTM e indemnización civil por daños y perjuicios.",
    aplicabilidad: "ALTA",
    aplicabilidadDesc: "Evalúa la falta de cuidado en el tratamiento de datos y las responsabilidades del funcionario en la custodia de claves.",
    color: "blue",
  },
  {
    nombre: "GDPR",
    alcance: "Extraterritorial. Aplica a cualquier entidad global que trate datos de residentes de la UE.",
    jurisdiccion: "Unión Europea",
    sujeto: "Cualquier organización pública o privada que controle o procese datos en la Unión Europea.",
    sanciones: "Multas administrativas de hasta €20 millones o el 4% de la facturación anual global.",
    aplicabilidad: "DIRECTA",
    aplicabilidadDesc: "Al ser FICOBA un registro estatal francés, es la norma madre que rige la brecha de origen de los 1.2 millones de afectados.",
    color: "emerald",
  },
];

const ejes = [
  { key: "alcance", label: "Alcance y Jurisdicción" },
  { key: "sujeto",  label: "Sujeto Regulado" },
  { key: "sanciones", label: "Sanciones" },
  { key: "aplicabilidad", label: "Aplicabilidad al Caso" },
];

const colorBadge = {
  ALTA:    "bg-red-500/20 text-red-400 border border-red-500/30",
  DIRECTA: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
};

const colorHeader = {
  blue:    "border-blue-500/30 bg-blue-500/10 text-blue-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
};

export default function SeccionComparacion() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600 font-mono">04</span>
          <span className="w-8 h-px bg-gray-700" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Comparación</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Tabla Comparativa de Marcos Regulatorios</h2>
        <p className="text-gray-500 text-sm mt-1">
          3 marcos regulatorios × 4 ejes de análisis, con columna de aplicabilidad al caso FICOBA.
        </p>
      </div>

      {/* Tabla desktop */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left p-4 text-gray-500 font-medium text-xs uppercase tracking-widest w-40 bg-gray-900/80">
                Eje / Marco
              </th>
              {marcos.map((m) => (
                <th key={m.nombre} className={`p-4 text-center font-bold text-sm ${colorHeader[m.color]} border-l border-gray-800 bg-gray-900/60`}>
                  {m.nombre}
                  <div className="text-[10px] font-normal opacity-70 mt-0.5">{m.jurisdiccion}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ejes.map((eje, i) => (
              <tr
                key={eje.key}
                className={`border-b border-gray-800/50 ${i % 2 === 0 ? "bg-gray-900/20" : "bg-gray-900/40"}`}
              >
                <td className="p-4 font-medium text-gray-400 text-xs uppercase tracking-wider bg-gray-900/50">
                  {eje.label}
                </td>
                {marcos.map((m) => (
                  <td key={m.nombre} className="p-4 text-gray-300 text-xs leading-relaxed border-l border-gray-800/30 align-top">
                    {eje.key === "aplicabilidad" ? (
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-2 ${colorBadge[m.aplicabilidad]}`}>
                          {m.aplicabilidad}
                        </span>
                        <p className="text-gray-400 text-[11px] leading-relaxed">{m.aplicabilidadDesc}</p>
                      </div>
                    ) : (
                      m[eje.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Vista mobile — cards apiladas */}
      <div className="md:hidden space-y-4">
        {marcos.map((m) => (
          <div key={m.nombre} className={`border rounded-xl overflow-hidden ${colorHeader[m.color].split(" ")[0]} border-opacity-30`}>
            <div className={`px-4 py-3 font-bold text-sm ${colorHeader[m.color]}`}>
              {m.nombre} — {m.jurisdiccion}
            </div>
            <div className="divide-y divide-gray-800">
              {ejes.map((eje) => (
                <div key={eje.key} className="px-4 py-3 bg-gray-900/60">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{eje.label}</p>
                  {eje.key === "aplicabilidad" ? (
                    <div>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 ${colorBadge[m.aplicabilidad]}`}>
                        {m.aplicabilidad}
                      </span>
                      <p className="text-gray-400 text-xs">{m.aplicabilidadDesc}</p>
                    </div>
                  ) : (
                    <p className="text-gray-300 text-xs leading-relaxed">{m[eje.key]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded border bg-red-500/20 text-red-400 border-red-500/30 text-[10px] font-bold">ALTA</span>
          <span className="text-gray-500">= Aplicación directa a actores del caso</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded border bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-bold">DIRECTA</span>
          <span className="text-gray-500">= Norma madre que regula la fuente del incidente</span>
        </div>
      </div>
    </div>
  );
}
