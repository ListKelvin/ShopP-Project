import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BrandImg from "../../../assets/Branding/image 67.png";
import { CarouselStyled } from "../styled";
// const ProductPreview = [
//   {id}
// ]
const Carousel2 = () => {
  return (
    <CarouselStyled
      autoPlay={true}
      interval={4000}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
      <div>
        <img src={`${BrandImg}`} />
      </div>
    </CarouselStyled>
  );
};

export default Carousel2;
