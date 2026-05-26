import { ShieldCheck, Key, Network, GraduationCap, AlertTriangle } from "lucide-react";

const recomendaciones = [
  {
    numero: "01",
    icon: Key,
    titulo: "Autenticación Multifactor (MFA) Robusta",
    desc: "Exigir MFA obligatorio, idealmente mediante tokens físicos o biometría, para todos los accesos a bases de datos estatales. Esto neutraliza de inmediato el riesgo de credenciales comprometidas.",
    color: "emerald",
    impacto: "CRÍTICO",
  },
  {
    numero: "02",
    icon: Network,
    titulo: 'Arquitectura "Confianza Cero"',
    desc: "Aplicar el principio de mínimo privilegio. Un funcionario público estándar no debería tener los permisos técnicos para consultar 1.2 millones de registros de una sola vez.",
    color: "blue",
    impacto: "ALTO",
  },
  {
    numero: "03",
    icon: GraduationCap,
    titulo: "Capacitación Continua",
    desc: "Establecer programas obligatorios de concientización en ciberseguridad para los funcionarios, enfocados en detectar ataques de phishing, que suele ser la principal forma para el robo de claves.",
    color: "amber",
    impacto: "ALTO",
  },
];

const colorMap = {
  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", icon: "text-emerald-400", num: "text-emerald-600", badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  blue:    { border: "border-blue-500/30",    bg: "bg-blue-500/10",    icon: "text-blue-400",    num: "text-blue-600",    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  amber:   { border: "border-amber-500/30",   bg: "bg-amber-500/10",   icon: "text-amber-400",   num: "text-amber-600",   badge: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
};

const impactoBadge = {
  CRÍTICO: "bg-red-500/20 text-red-400 border border-red-500/30",
  ALTO:    "bg-amber-500/20 text-amber-400 border border-amber-500/30",
};

export default function SeccionConclusiones() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600 font-mono">07</span>
          <span className="w-8 h-px bg-gray-700" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Conclusiones</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Conclusión y Recomendaciones</h2>
        <p className="text-gray-500 text-sm mt-1">Reflexión final y medidas de seguridad para prevenir incidentes similares.</p>
      </div>

      {/* Reflexión final — callout box */}
      <div className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-gray-900 p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Reflexión Final</span>
          </div>
          <blockquote className="text-gray-200 text-base leading-relaxed border-l-4 border-emerald-500/50 pl-5">
            El caso de FICOBA demuestra que las bases de datos gubernamentales, por más robustas que parezcan,
            el <span className="text-emerald-400 font-bold">factor humano</span> es en la mayoría de los casos
            el elemento con mayor área de exposición a posibles ataques. El hecho de que{" "}
            <span className="text-white font-bold">1.2 millones de registros financieros</span> fueran vulnerados
            únicamente por la obtención de credenciales de funcionarios demuestra una falla en los controles de
            acceso y en la validación de identidad en el sistema.
          </blockquote>
        </div>
      </div>

      {/* Recomendaciones */}
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          Recomendaciones de Seguridad
        </h3>
        <div className="space-y-4">
          {recomendaciones.map((rec, i) => {
            const c = colorMap[rec.color];
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden ${c.border} hover:shadow-lg hover:shadow-black/20 transition-all duration-200`}
              >
                <div className={`flex items-start gap-4 p-5 ${c.bg}`}>
                  <div className="flex-shrink-0 text-center">
                    <span className={`text-xs font-mono font-bold ${c.num}`}>{rec.numero}</span>
                    <div className={`w-10 h-10 rounded-xl bg-gray-900/60 border border-gray-700 flex items-center justify-center mt-1`}>
                      <rec.icon size={18} className={c.icon} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-white font-bold text-sm">{rec.titulo}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${impactoBadge[rec.impacto]}`}>
                        {rec.impacto}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{rec.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Panel de cierre */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: "Vector de ataque", valor: "Credenciales robadas", color: "text-red-400" },
          { label: "Personas afectadas", valor: "1.2 millones", color: "text-amber-400" },
          { label: "Lección principal", valor: "Factor humano crítico", color: "text-emerald-400" },
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 text-center">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
            <p className={`text-sm font-bold ${item.color}`}>{item.valor}</p>
          </div>
        ))}
      </div>

      {/* Footer del informe */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
        <ShieldCheck size={14} className="text-gray-600 flex-shrink-0" />
        <p className="text-gray-600 text-xs">
          Informe de Ciberseguridad — Caso FICOBA 2026 · Seguridad de la Información · Análisis bajo legislación chilena
        </p>
      </div>
    </div>
  );
}
