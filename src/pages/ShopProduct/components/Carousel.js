import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { API_URL } from "../../../config/config";
import styled from "styled-components";

const CarouselImg = (props) => {
  const linkFile = `${API_URL}/file/`;

  const renderThumbnail = () => {
    const thumbList = props.img.map((product, index) => (
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
      {props.img.map((el, id) => {
        return (
          <img
            src={linkFile + el.localFile.filename}
            alt="ImgPreview"
            key={id}
          />
        );
      })}
    </CarouselStyled>
  );
};

export default CarouselImg;
export const CarouselStyled = styled(Carousel)`
  padding: 20px;
  & .carousel {
    text-align: center;
    & .slide {
      padding: 1rem;
      max-height: 30rem;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
