import { injectReducer } from "../store/store";
import { createSlice, current } from "@reduxjs/toolkit";

export const initialState = {
  isCartOpen: false,

  cartItems: [],
};
export const addCartItem = (cartItems, productToAdd) => {
  const newItems = {
    id: productToAdd.id,
    name: productToAdd.name,
    detail: productToAdd.detail,
    amount: productToAdd.amount,
    quantity: productToAdd.quantity,
    sold: productToAdd.sold,
    star: productToAdd.star,
    status: "AVAILABLE",
    shop: productToAdd.shop,
    category: productToAdd.category,
    productImage: productToAdd.productImage,
    amountInCart: 1,
  };
  const checkShopInCart = cartItems.find((item) => {
    if (item.idShop === productToAdd.shop?.id) {
      return item;
    } else return false;
  });
  console.log(checkShopInCart);
  if (checkShopInCart) {
    const existingCartItem = checkShopInCart?.itemOfShop.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    console.log("line 19:", existingCartItem);
    if (existingCartItem) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].idShop === productToAdd.shop?.id) {
          let itemChilds = cartItems[i].itemOfShop;
          for (let j = 0; j < itemChilds.length; j++) {
            if (itemChilds[j].id === productToAdd.id) {
              // itemChilds[j].amountInCart = itemChilds[j].amountInCart + 1;
              break;
            }
          }
        }
      }
    } else {
      checkShopInCart.itemOfShop = [...cartItems, newItems];
    }
  }
  //   const UpdateItemInShop = checkShopInCart?.itemOfShop.map((cartItem) =>
  //   cartItem.id === productToAdd.id
  //     ? { ...cartItem, amountInCart: cartItem.amountInCart + 1 }
  //     : cartItem
  // );

  return [
    ...cartItems,
    {
      shopName: newItems.shop?.name || "unknown",
      idShop: newItems.shop?.id,
      itemOfShop: [{ ...newItems, amountInCart: 1 }],
    },
  ];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.amountInCart === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, amountInCart: cartItem.amountInCart - 1 }
      : cartItem
  );
};

export const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
export const name = "Cart";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action) => {
      console.log(action.payload);

      const formatItem = {
        idShop: action.payload.shop?.id,
        itemOfShop: [action.payload],
      };

      //check shop in cart true return itemOfShop
      const checkShopInCart = current(state.cartItems).find((item) => {
        if (item.idShop === action.payload.shop?.id) {
          return item;
        } else return false;
      });
      // check itemOfShop is existing

      if (checkShopInCart) {
        const checkItemInShop = checkShopInCart?.itemOfShop.find((item) => {
          if (item.id === action.payload.id) {
            return item;
          } else {
            return false;
          }
        });

        if (checkItemInShop) {
          checkItemInShop.amountItem++;
          console.log("1");
        } else {
          console.log("2");
          checkShopInCart?.itemOfShop.push({
            ...action.payload,
          });
        }
      } else {
        state.cartItems.push({ ...formatItem });
      }

      // const itemInCart = state.cartItems.find(
      //   (item) => item.id === action.payload.shop.id
      // );
      // console.log("line 94", itemInCart);
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
      //   state.cartItems.push({ ...action.payload, quantity: 1 });
      // }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
    },
  },
});
injectReducer(name, slice.reducer);
export const {
  setCartOpen,
  setCartItems,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = slice.actions;

export default slice;
