import Card from "../Card/Card";
import wanderImg from "../../public/wander.png";
import asicImg from "../../public/asic.png";
import clemsImg from "../../public/clems.png";
import djcsImg from "../../public/djcs.png";
import egytekImg from "../../public/egytek.png";
import Egytek from "./Egytek";
import Clems from "./Clems";
import Djcs from "./Djcs";
import Asic from "./Asic";
import Wander from "./Wander";

export default function Projects() {
  return (
    <ul className="block md:flex flex-wrap content-start">
      <Card imageSrc={wanderImg} title="Wander app">
        <Wander />
      </Card>
      <Card imageSrc={asicImg} title="ASIC Careers">
        <Asic />
      </Card>
      <Card imageSrc={clemsImg} title="Clemenger Careers">
        <Clems />
      </Card>
      <Card
        imageSrc={djcsImg}
        title="VIC Gov Department of justice and community safety Careers"
      >
        <Djcs />
      </Card>
      <Card imageSrc={egytekImg} title="Egytek Solutions">
        <Egytek />
      </Card>
    </ul>
  );
}
