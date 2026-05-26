import { CreditCard, MapPin, Users, Eye, Trash2, Ban } from "lucide-react";

const tiposDatos = [
  {
    icon: Users,
    tipo: "DATOS IDENTIFICATORIOS",
    dato: "Nombres y apellidos",
    categoria: "PERSONAL",
    color: "blue",
    desc: "Información que permite identificar directamente a una persona natural.",
  },
  {
    icon: MapPin,
    tipo: "DATOS DE LOCALIZACIÓN",
    dato: "Direcciones de los titulares",
    categoria: "PERSONAL",
    color: "blue",
    desc: "Información que permite ubicar geográficamente a las personas afectadas.",
  },
  {
    icon: CreditCard,
    tipo: "DATOS FINANCIEROS",
    dato: "Números de cuenta IBAN",
    categoria: "PERSONAL",
    color: "amber",
    desc: "Datos bancarios que permiten operar sobre las cuentas de los titulares.",
  },
];

const derechosARCO = [
  {
    letra: "A",
    nombre: "Acceso",
    icon: Eye,
    color: "red",
    vulnerado: true,
    articulo: "Art. 12, Ley 19.628",
    cita: '"Toda persona tiene derecho a exigir [...], información sobre los datos relativos a su persona, su procedencia y destinatario"',
    analisis: "Este derecho se vulnera porque el banco perdió el control de la trazabilidad y no existe garantía para el titular de quién o quiénes son los destinatarios que poseen sus datos.",
  },
  {
    letra: "C",
    nombre: "Cancelación",
    icon: Trash2,
    color: "amber",
    vulnerado: true,
    articulo: "Art. 12, Ley 19.628",
    cita: "El titular podrá exigir la eliminación de sus datos en caso de que su almacenamiento carezca de fundamento.",
    analisis: "Los afectados ven este derecho anulado, puesto que su información fue copiada y no existe una forma legal de eliminar la información en los sistemas de los atacantes.",
  },
  {
    letra: "O",
    nombre: "Oposición",
    icon: Ban,
    color: "blue",
    vulnerado: true,
    articulo: "Art. 9, Ley 19.628",
    cita: '"Los datos personales deben utilizarse sólo para los fines para los cuales hubieren sido recolectados"',
    analisis: "Al haberse filtrado la información, los titulares no podrán oponerse a que sus identificadores bancarios y personales sean utilizados con fines delictivos.",
  },
];

const colorBadge = {
  PERSONAL: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  SENSIBLE:  "bg-red-500/20 text-red-400 border-red-500/30",
};

const colorARCO = {
  red:   { bg: "bg-red-500/10",   border: "border-red-500/30",   text: "text-red-400",   letra: "bg-red-500/20 text-red-400" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", letra: "bg-amber-500/20 text-amber-400" },
  blue:  { bg: "bg-blue-500/10",  border: "border-blue-500/30",  text: "text-blue-400",  letra: "bg-blue-500/20 text-blue-400" },
};

export default function SeccionDatos() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600 font-mono">06</span>
          <span className="w-8 h-px bg-gray-700" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Datos Personales</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Tratamiento de Datos — Ley 19.628</h2>
        <p className="text-gray-500 text-sm mt-1">
          Tipos de datos, distinción personales/sensibles y derechos ARCO afectados.
        </p>
      </div>

      {/* Stat mega banner */}
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 p-5 rounded-xl border border-red-500/20 bg-red-500/10">
          <p className="text-red-400 text-xs uppercase tracking-widest mb-1">Registros expuestos</p>
          <p className="text-5xl font-bold text-white font-mono">1.2M</p>
          <p className="text-red-400/60 text-xs mt-1">personas afectadas por la brecha</p>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 text-center">
            <p className="text-2xl font-bold text-blue-400 font-mono">3</p>
            <p className="text-gray-500 text-xs">tipos de datos</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 text-center">
            <p className="text-2xl font-bold text-amber-400 font-mono">3</p>
            <p className="text-gray-500 text-xs">derechos ARCO</p>
          </div>
        </div>
      </div>

      {/* Tipos de datos */}
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          Tipos de datos comprometidos
        </h3>
        <div className="space-y-3">
          {tiposDatos.map((d, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-gray-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0">
                <d.icon size={16} className="text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="text-[9px] font-bold text-gray-600 tracking-widest uppercase">{d.tipo}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${colorBadge[d.categoria]}`}>
                    {d.categoria}
                  </span>
                </div>
                <p className="text-white text-sm font-medium">{d.dato}</p>
                <p className="text-gray-500 text-xs">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distinción personal vs sensible */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${colorBadge.PERSONAL} mb-2 inline-block`}>DATO PERSONAL</span>
          <p className="text-gray-300 text-xs leading-relaxed">
            Según el <span className="text-white font-semibold">Art. 2, letra f</span>, son aquellos relativos a cualquier
            información referente a personas naturales, identificadas o identificables.
            <span className="text-blue-300 block mt-2">→ IBAN, nombre, dirección</span>
          </p>
        </div>
        <div className="p-4 rounded-xl border border-gray-700 bg-gray-900/50">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${colorBadge.SENSIBLE} mb-2 inline-block`}>DATO SENSIBLE</span>
          <p className="text-gray-400 text-xs leading-relaxed">
            Según el <span className="text-white font-semibold">Art. 2, letra g</span>, son aquellos que hacen referencia
            a características físicas o morales de las personas, hechos o circunstancias de su vida privada o intimidad.
            <span className="text-gray-500 block mt-2">→ No se identificaron datos sensibles en el caso FICOBA</span>
          </p>
        </div>
      </div>

      {/* Derechos ARCO */}
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          Derechos ARCO afectados
        </h3>
        <div className="space-y-4">
          {derechosARCO.map((d, i) => {
            const c = colorARCO[d.color];
            return (
              <div key={i} className={`border rounded-xl overflow-hidden ${c.border}`}>
                <div className={`flex items-center gap-4 px-5 py-3 ${c.bg}`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg ${c.letra} flex-shrink-0`}>
                    {d.letra}
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${c.text}`}>Derecho de {d.nombre}</p>
                    <p className="text-gray-500 text-[10px] font-mono">{d.articulo}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                      VULNERADO
                    </span>
                  </div>
                </div>
                <div className="px-5 py-4 bg-gray-900/50 space-y-3">
                  <blockquote className="pl-3 border-l-2 border-gray-600 text-gray-400 text-xs italic leading-relaxed">
                    {d.cita}
                  </blockquote>
                  <p className="text-gray-400 text-xs leading-relaxed">{d.analisis}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
