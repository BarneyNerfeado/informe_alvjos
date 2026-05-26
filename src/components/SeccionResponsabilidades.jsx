import { UserX, Building2, UserCheck } from "lucide-react";

const actores = [
  {
    nombre: "Atacante / Grupo Cibercriminal",
    icon: UserX,
    color: "red",
    descripcion: "Actor malicioso que obtuvo y utilizó credenciales robadas para infiltrarse en FICOBA.",
    responsabilidades: [
      {
        tipo: "PENAL",
        nivel: "alto",
        titulo: "Presidio y Multas",
        desc: "Según la Ley 21.459, el autor se expone a penas de presidio mayor y multas (UTM) por acceso ilícito y abuso de dispositivos.",
        norma: "Ley 21.459",
      },
      {
        tipo: "CIVIL",
        nivel: "alto",
        titulo: "Indemnización de Daños",
        desc: "Obligación de indemnizar económicamente los daños emergentes y morales causados tanto al Estado francés como a los titulares de las cuentas.",
        norma: "Título XXXV Código Civil — Delitos y Cuasidelitos",
      },
    ],
  },
  {
    nombre: "FICOBA / Estado Francés",
    icon: Building2,
    color: "amber",
    descripcion: "Institución responsable de custodiar los datos bancarios de 1.2 millones de ciudadanos.",
    responsabilidades: [
      {
        tipo: "CIVIL",
        nivel: "alto",
        titulo: "Demandas Colectivas",
        desc: "Posible exposición a demandas colectivas de los 1.2 millones de usuarios afectados por negligencia en la custodia de su información financiera.",
        norma: "GDPR — Art. 82 (Derecho a indemnización)",
      },
      {
        tipo: "ADMINISTRATIVA",
        nivel: "alto",
        titulo: "Sanciones Regulatorias",
        desc: "Sanciones por parte de las autoridades reguladoras de datos por fallas en las medidas de seguridad y controles de acceso a su infraestructura.",
        norma: "GDPR — Art. 83 (Multas hasta €20M o 4% facturación global)",
      },
    ],
  },
  {
    nombre: "Funcionario Público",
    icon: UserCheck,
    color: "blue",
    descripcion: "Titular de las credenciales comprometidas, ya sea por negligencia o acto intencional.",
    responsabilidades: [
      {
        tipo: "PENAL",
        nivel: "medio",
        titulo: "Violación de Secretos / Cohecho",
        desc: "Si la investigación revela que se vendió el acceso intencionalmente, enfrentaría cargos por violación de secretos o cohecho.",
        norma: "Código Penal — Arts. sobre secretos funcionarios",
      },
      {
        tipo: "ADMINISTRATIVA",
        nivel: "medio",
        titulo: "Suspensión o Destitución",
        desc: "Si se comprueba negligencia inexcusable en el resguardo de sus contraseñas (caer en phishing), se expone a suspensión o destitución del cargo público.",
        norma: "Estatuto Administrativo — Ley 18.834",
      },
    ],
  },
];

const colorMap = {
  red:   { border: "border-red-500/20",   header: "bg-red-500/10",   icon: "text-red-400",   glow: "hover:shadow-red-500/5" },
  amber: { border: "border-amber-500/20", header: "bg-amber-500/10", icon: "text-amber-400", glow: "hover:shadow-amber-500/5" },
  blue:  { border: "border-blue-500/20",  header: "bg-blue-500/10",  icon: "text-blue-400",  glow: "hover:shadow-blue-500/5" },
};

const badgeTipo = {
  PENAL:           "bg-red-500/20 text-red-400 border border-red-500/30",
  CIVIL:           "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  ADMINISTRATIVA:  "bg-blue-500/20 text-blue-400 border border-blue-500/30",
};

export default function SeccionResponsabilidades() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600 font-mono">05</span>
          <span className="w-8 h-px bg-gray-700" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Responsabilidades</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Identificación de Responsabilidades Legales</h2>
        <p className="text-gray-500 text-sm mt-1">
          3 actores identificados, cada uno con 2 tipos de responsabilidad y norma citada.
        </p>
      </div>

      {/* Leyenda de tipos */}
      <div className="flex flex-wrap gap-2">
        {["PENAL", "CIVIL", "ADMINISTRATIVA"].map((tipo) => (
          <span key={tipo} className={`text-[10px] font-bold px-2 py-1 rounded ${badgeTipo[tipo]}`}>{tipo}</span>
        ))}
      </div>

      {/* Actor cards */}
      <div className="space-y-5">
        {actores.map((actor, i) => {
          const c = colorMap[actor.color];
          return (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden ${c.border} hover:shadow-lg ${c.glow} transition-all duration-200`}
            >
              {/* Actor header */}
              <div className={`flex items-center gap-4 px-5 py-4 ${c.header}`}>
                <div className="w-10 h-10 rounded-xl bg-gray-900/60 border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <actor.icon size={18} className={c.icon} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{actor.nombre}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{actor.descripcion}</p>
                </div>
              </div>

              {/* Responsabilidades grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800/50 bg-gray-900/40">
                {actor.responsabilidades.map((resp, j) => (
                  <div key={j} className="p-5 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${badgeTipo[resp.tipo]}`}>
                        {resp.tipo}
                      </span>
                      <span className="text-white text-sm font-semibold">{resp.titulo}</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{resp.desc}</p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[9px] text-gray-600 uppercase tracking-widest">Norma:</span>
                      <span className="text-gray-500 text-[10px] font-mono">{resp.norma}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
