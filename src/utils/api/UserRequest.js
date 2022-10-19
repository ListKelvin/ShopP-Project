import LocalStorageUtils from "../LocalStorageUtils";

const testUser = () => {
  const Token = LocalStorageUtils.getUser();
  console.log(Token);
};
testUser();
