import BuscaCep from "./components/BuscaCep";
import MudarTema from "./components/MudarTema";
import "./config/scss/styles.scss";

export default function App() {
  return (
    <div>
      <MudarTema />
      <BuscaCep />
    </div>
  );
}
