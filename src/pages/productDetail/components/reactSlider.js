import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselStyled, ImgPreviewStyled } from "../styled";

import { API_URL } from "../../../config/config";
const Carousel2 = ({ item }) => {
  const linkFile = `${API_URL}/file/`;
  // const { item } = state;
  const renderThumbnail = () => {
    const thumbList = item.productImage.map((product, index) => (
      <picture style={{ border: "none" }} key={index}>
        <img
          key={product._id}
          src={`${linkFile}${product.localFile.filename}`}
          alt={product.name}
          height="70"
        />
      </picture>
    ));

    return thumbList;
  };
  return (
    <CarouselStyled
      autoPlay={true}
      interval={4000}
      infiniteLoop
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      renderThumbs={renderThumbnail}
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
