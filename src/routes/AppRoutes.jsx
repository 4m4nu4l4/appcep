import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../Layout/Body";
import Inicial from "../pages/InicialScreen";
import Sobre from "../pages/SobreScreen";
import Contato from "../pages/ContatoScreen";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* responsável por englobar o app em navegação */}
      <Routes>
        {/* responsável pelas rotas */}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
