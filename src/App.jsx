import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SeccionResumen from "./components/SeccionResumen";
import SeccionMarco from "./components/SeccionMarco";
import SeccionDelitos from "./components/SeccionDelitos";
import SeccionComparacion from "./components/SeccionComparacion";
import SeccionResponsabilidades from "./components/SeccionResponsabilidades";
import SeccionDatos from "./components/SeccionDatos";
import SeccionConclusiones from "./components/SeccionConclusiones";

const secciones = [
  { id: "resumen", label: "Resumen", numero: "01" },
  { id: "marco", label: "Marco Normativo", numero: "02" },
  { id: "delitos", label: "Delitos", numero: "03" },
  { id: "comparacion", label: "Comparación", numero: "04" },
  { id: "responsabilidades", label: "Responsabilidades", numero: "05" },
  { id: "datos", label: "Datos Personales", numero: "06" },
  { id: "conclusiones", label: "Conclusiones", numero: "07" },
];

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState("resumen");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "resumen":         return <SeccionResumen />;
      case "marco":           return <SeccionMarco />;
      case "delitos":         return <SeccionDelitos />;
      case "comparacion":     return <SeccionComparacion />;
      case "responsabilidades": return <SeccionResponsabilidades />;
      case "datos":           return <SeccionDatos />;
      case "conclusiones":    return <SeccionConclusiones />;
      default:                return <SeccionResumen />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 font-mono overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        secciones={secciones}
        seccionActiva={seccionActiva}
        setSeccionActiva={setSeccionActiva}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Contenido principal */}
      <main
        className={`flex-1 overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        {/* Topbar mobile */}
        <div className="sticky top-0 z-10 flex items-center gap-3 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-emerald-400 hover:text-emerald-300"
          >
            <span className="text-xl">☰</span>
          </button>
          <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase">
            FICOBA // Informe
          </span>
        </div>

        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          {renderSeccion()}
        </div>
      </main>
    </div>
  );
}
