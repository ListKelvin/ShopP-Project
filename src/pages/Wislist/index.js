import { CheckBox } from "@mui/icons-material";
import { Background, Background2 } from "./style";
const Array02 = [
  { id: 0, animalName: "Minh", age: 30 },
  { id: 1, animalName: "Long", age: 22 },
  { id: 2, animalName: "Kim", age: 10 },
  { id: 3, animalName: "Linh", age: 50 },
];
// const { animalName, age } = props;
const Wishlist = () => {
  return (
    <>
      {Array02.map(({ animalName, age, id }) => {
        return (
          <div key={id}>
            <CheckBox>fdsfsd</CheckBox>
            <h1>{animalName}</h1>
            <span>{age}</span>
          </div>
        );
      })}
      <Background>this is wishlist page background</Background>

      <Background2>this is wishlist page background 2</Background2>
    </>
  );
};

export default Wishlist;
