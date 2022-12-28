import { WrapperAble, EvaluationsContainer, EvaluationTitle,ButtonDiv,ProductEvaluation, Feedback,ProductImageContainer, EvaluationContent, EvaluationButton, ButtonStyle, ProductImage, EvaluationDiv, AvatarBox, UserName, NameRatingBox, TopContainer, BottomContainer, TimeClassiContainer, LikeDiv, Unlike, Like, Able, Unable, WarningContainer } from "./style";
import Rating from "@mui/material/Rating";
import Img from "../../assets/Product/image 161.png";
import { CardMedia } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ErrorIcon from '@mui/icons-material/Error';
import Button from "../../Component/Button";

const RatingProduct = [
  {
    id: 1,
    username: "Lê Thành Nong",
    star: 5,
    time: "2022 - 07 - 28  10:22",
    classification: "Black",
    feedback: "Shoppee đóng gói cẩn thận,sản phẩm phù hợp với giá tiền,giao hàng nhanh chong.sẽ ủng hộ shop lần nữa",
    image: [Img, Img, Img, Img, Img, Img],
    like: 70,
  },
  {
    id: 2,
    username: "Lê Thành Nong",
    star: 1,
    time: "2022 - 07 - 28  10:22",
    classification: "Black",
    feedback: "Sản phẩm tệ",
    image: [Img, Img, Img, Img],
    like: 0,
  },
  {
    id: 2,
    username: "Lê Thành Nong",
    star: 4,
    time: "2022 - 07 - 28  10:22",
    classification: "Black",
    feedback: "",
    image: [],
    like: 7,
  }
];
const UsrEvaluation = () => {
  return (
    <EvaluationDiv>
    <EvaluationsContainer>
      <EvaluationTitle>My Evaluation</EvaluationTitle> 
      {RatingProduct.map(({id, username, time, classification, star, feedback, image, like}) => {
          return (
      <ProductEvaluation>
        <EvaluationContent key = {id}>
        <TopContainer>
        <AvatarBox>
          <AccountCircleIcon sx = {{fontSize: "2rem"}}/>
        </AvatarBox>
        <NameRatingBox>
          <UserName>{username}</UserName>
          <Rating
              name="simple-controlled"
              value={star}
              sx={{ fontSize: "14px" }}
              precision={0.5}
              readOnly
          />
          <TimeClassiContainer>{time} | Classification: {classification}</TimeClassiContainer>
          </NameRatingBox>
          </TopContainer>
          <BottomContainer>
          <Feedback>{feedback}</Feedback>
          {image.length !==0  && ( <ProductImageContainer>
          {image.map((el, id) => {
              return (
            <ProductImage key = {id}>
            <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            image={el}      
            alt="green iguana"
            />
            </ProductImage>
            );
            })}
          </ProductImageContainer>)}
          <LikeDiv>
            <Unlike><ThumbUpOffAltIcon sx = {{marginRight: ".4rem"}}/></Unlike>
            <Like><ThumbUpIcon sx = {{marginRight: ".4rem"}}/></Like>
          {like}</LikeDiv>
          </BottomContainer>
        </EvaluationContent>
        <EvaluationButton>
        <WrapperAble show={true}>
          <ButtonDiv><Button style = {{background: "#55ABAB", textTransform: "none", color: "white", width: "7rem"}}>Edit</Button></ButtonDiv>
        </WrapperAble>
        <WrapperAble show={false}>
          <ButtonDiv><ButtonStyle style = {{background: "#EAEAEA;", textTransform: "none", color: "#8F8F8F", width: "7rem", boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)"}}>Edit</ButtonStyle></ButtonDiv>
          <WarningContainer>
            <ErrorIcon sx = {{fontSize: ".85rem"}}/>
            You can’t edit the evaluation after 30 days
          </WarningContainer>
          </WrapperAble>
        </EvaluationButton>
      </ProductEvaluation>
        );
        })}
    </EvaluationsContainer>
    </EvaluationDiv>
  );
};

export default UsrEvaluation;
