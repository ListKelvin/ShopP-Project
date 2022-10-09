import { post } from "./ApiCaller";

export const loginFunc = async () => {
  const response = await post("/auth/login", {
    email: "minhpham23@gmail.com",
    password: "asdQE12!@",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.error(err));
};

// loginFunc();
