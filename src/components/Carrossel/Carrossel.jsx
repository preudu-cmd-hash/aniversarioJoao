import Carousel from "react-bootstrap/Carousel";
import { CardFamilia } from "../CardFamilia/CardFamilia";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Carousel.Caption>
          <CardFamilia />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
