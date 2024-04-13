import { Route, Routes } from "react-router-dom";
import { FisicaPageHome } from "./pages/Fisica/FisicaPageHome";
import { HomePage } from "./components/layout/HomePage";
import { ElecAndMagPage } from "./pages/ElecAndMag/ElecAndMagPage";

function App() {
  return (
    <>
      {/* Damos un componente llamado Routes para determinar las rutas globales de la pagina */}
      <Routes>
        {/* Damos la ruta individual, y damos el path el cual se refiere al valor de la url
        en este casoc como es la principal damos el "/" y damos el index
        y element se entiende como lo que el servidor renderiza en cada ruta */}
        <Route path="/" index element={<HomePage />} />
        <Route path="/fisica" element={<FisicaPageHome />} />
        <Route path="/electricidad/magnetismo" element={<ElecAndMagPage />} />
      </Routes>
    </>
  );
}

export default App;
