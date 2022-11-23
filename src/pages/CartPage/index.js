const Array01 = [
  {
    name: "minh",
    age: 18,
  },
  {
    name: "Kiet",
    age: 22,
  },
  {
    name: "Long",
    age: 30,
  },
];

const CartPage = () => {
  return (
    //mọi code phải nằm trong thẻ này (<> </>)
    <>
      {Array01.map(({ name, age }, id) => (
        <div key={id}>
          <h1>{name}</h1>
          <span> {age}</span>
        </div>
      ))}

      <h1> this is Cart page</h1>
    </>
  );
};

export default CartPage;
