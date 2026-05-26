import { AlertCircle, Calendar, Database, Users, MapPin, CreditCard, Hash } from "lucide-react";

const stats = [
  { icon: Users,    value: "1.2M",     label: "Cuentas comprometidas", color: "text-red-400",     bg: "bg-red-500/10 border-red-500/20" },
  { icon: Calendar, value: "Ene 2026", label: "Fecha del incidente",   color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/20" },
  { icon: Database, value: "FICOBA",   label: "Sistema vulnerado",     color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
];

const datosRobados = [
  { icon: CreditCard, label: "Números IBAN",          desc: "Cuentas bancarias internacionales de los titulares" },
  { icon: Users,      label: "Nombres y apellidos",   desc: "Identidad completa de cada titular afectado" },
  { icon: MapPin,     label: "Direcciones",            desc: "Datos de localización de los titulares" },
  { icon: Hash,       label: "NIF (en algunos casos)", desc: "Número de identificación fiscal del titular" },
];

export default function SeccionResumen() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-gray-900 via-gray-900 to-red-950/30 p-8">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase rounded">
              CASO REAL
            </span>
            <span className="px-2 py-0.5 bg-gray-800 border border-gray-700 text-gray-400 text-xs tracking-widest rounded">
              01 — RESUMEN EJECUTIVO
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Brecha de Datos{" "}
            <span className="text-emerald-400">FICOBA</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-6">
            Fichier National des Comptes Bancaires et Assimilés — Francia, 2026
          </p>

          <p className="text-gray-300 leading-relaxed max-w-3xl text-sm md:text-base">
            A finales de enero de 2026, un actor malicioso obtuvo las{" "}
            <span className="text-emerald-400 font-semibold">credenciales de acceso de funcionarios públicos</span>{" "}
            para infiltrarse en la base de datos del Registro Nacional de Cuentas Bancarias de Francia.
            El incidente expuso información financiera y personal de{" "}
            <span className="text-red-400 font-bold">1.2 millones de personas</span>,
            constituyendo una de las brechas más significativas en registros estatales franceses.
          </p>

          <div className="mt-4 flex items-start gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg max-w-3xl">
            <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-200/80 text-xs leading-relaxed">
              El vector de ataque fue el factor humano: credenciales de funcionarios públicos comprometidas
              permitieron eludir todas las barreras tecnológicas del sistema.
            </p>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`border rounded-xl p-5 flex items-center gap-4 ${stat.bg} transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/30`}
          >
            <div className={`w-10 h-10 rounded-lg bg-gray-900/60 flex items-center justify-center flex-shrink-0`}>
              <stat.icon size={20} className={stat.color} />
            </div>
            <div>
              <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Datos robados */}
      <div>
        <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-gray-700 inline-block" />
          Datos comprometidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {datosRobados.map((d, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/40 transition-colors">
                <d.icon size={14} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-gray-200 text-sm font-semibold">{d.label}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
