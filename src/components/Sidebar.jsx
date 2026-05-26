import {
  FileText, Scale, AlertTriangle, BarChart2,
  Users, Database, Lightbulb, ChevronLeft, ChevronRight, Shield
} from "lucide-react";

const iconMap = {
  resumen:           FileText,
  marco:             Scale,
  delitos:           AlertTriangle,
  comparacion:       BarChart2,
  responsabilidades: Users,
  datos:             Database,
  conclusiones:      Lightbulb,
};

export default function Sidebar({ secciones, seccionActiva, setSeccionActiva, open, setOpen }) {
  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-30 h-full flex flex-col
          bg-gray-900 border-r border-gray-800
          transition-all duration-300 ease-in-out
          ${open ? "w-64" : "w-16"}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 py-5 border-b border-gray-800 ${!open && "justify-center"}`}>
          <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/20 border border-emerald-500/50 rounded flex items-center justify-center">
            <Shield size={16} className="text-emerald-400" />
          </div>
          {open && (
            <div className="overflow-hidden">
              <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase leading-none">FICOBA</p>
              <p className="text-gray-500 text-[10px] tracking-wider mt-0.5">Análisis de Ciberseguridad</p>
            </div>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {secciones.map((sec) => {
            const Icon = iconMap[sec.id];
            const activo = seccionActiva === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => { setSeccionActiva(sec.id); }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                  transition-all duration-200 group relative
                  ${activo
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/60"
                  }
                  ${!open && "justify-center"}
                `}
                title={!open ? sec.label : undefined}
              >
                {/* Número */}
                {open && (
                  <span className={`text-[10px] font-mono font-bold ${activo ? "text-emerald-600" : "text-gray-600"}`}>
                    {sec.numero}
                  </span>
                )}
                <Icon size={16} className="flex-shrink-0" />
                {open && (
                  <span className="text-xs font-medium tracking-wide truncate">{sec.label}</span>
                )}
                {/* Indicador activo */}
                {activo && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                )}

                {/* Tooltip cuando está colapsado */}
                {!open && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    {sec.numero} — {sec.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Toggle collapse */}
        <div className="p-3 border-t border-gray-800">
          <button
            onClick={() => setOpen(!open)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-gray-800 transition-all text-xs ${!open && "justify-center"}`}
          >
            {open ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            {open && <span>Colapsar</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
