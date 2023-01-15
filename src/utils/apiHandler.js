import { toastSuccess, toastError } from "../Component/ToastNotification";
import orderApi from "./productApiComponent/orderApi";

export const handler = async (action, ...data) => {
  const [id, successContent, failContent, token] = data;

  return await orderApi[action](token)
    .then((res) => {
      if (res.data.code === 200) {
        if (successContent) toastSuccess(successContent);
        return res.data.data;
      }
      if (res.data.code === 400) {
        if (failContent) toastError("Phiên đăng nhập hết hạn");
        return null;
      }
      if (res.data.code >= 404) {
        return [];
      }
      throw new Error(res.data.message);
    })
    .catch((err) => {
      if (failContent) toastError(failContent);
      return err;
    });
};
