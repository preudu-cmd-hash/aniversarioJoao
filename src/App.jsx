import { CardFotos } from "./components/CardFotos/CardFotos";
import { Footer } from "./components/Footer/Footer";
import { CardFamilia } from "./components/CardFamilia/CardFamilia";
import { CardAmigos } from "./components/CardAmigos/CardAmigos";

function App() {
  return (
    <>
      <div>
        <CardFotos />
        <CardFamilia />
        <CardAmigos />
        <Footer />
      </div>
    </>
  );
}

export default App;
