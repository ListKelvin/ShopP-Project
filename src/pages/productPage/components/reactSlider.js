import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BrandImg from "../../../assets/Branding/image 67.png";
const Carousel2 = () => {
  return (
    <Carousel interval={100}>
      <div>
        <img src={`${BrandImg}`} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={`${BrandImg}`} />

        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={`${BrandImg}`} />

        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Carousel2;
