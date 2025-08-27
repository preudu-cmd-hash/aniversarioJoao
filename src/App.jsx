import { useState } from "react";
import { CardFotos } from "./components/CardFotos/CardFotos";
import { Footer } from "./components/Footer/Footer";
import { Carousel } from "react-bootstrap";
import { CardFamilia } from "./components/CardFamilia/CardFamilia";
import { CardAmigos } from "./components/CardAmigos/CardAmigos";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

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
