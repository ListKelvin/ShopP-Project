import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselStyled, ImgPreviewStyled } from "../styled";

import { API_URL } from "../../../config/config";
const Carousel2 = ({ item }) => {
  const linkFile = `${API_URL}/file/`;

  return (
    <CarouselStyled
      autoPlay={true}
      interval={4000}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {item.productImage.map((el, id) => {
        return (
          <img
            key={id}
            src={`${linkFile}${el.localFile.filename}`}
            alt="ImgPreview"
          />
        );
      })}
    </CarouselStyled>
  );
};

export default Carousel2;
