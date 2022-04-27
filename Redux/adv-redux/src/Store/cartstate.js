import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const cartState = { items: [], totalQuantity: 0, changed:false };
const cartslice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    replaceCart(state, actions) {
      state.totalQuantity = actions.payload.totalQuantity;
      state.items = actions.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.changed=true;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.changed=true;
      const existingItemInCart = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItemInCart.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItemInCart.quantity--;
        existingItemInCart.totalPrice =
          existingItemInCart.totalPrice - existingItemInCart.price;
      }
    },
  },
});

export const sendCartdata = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "sending cart data...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-80acb-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data to cart failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data...",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed",
          message: "Sending data failed",
        })
      );
    }
  };
};
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-80acb-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items:cartData.items||[],
        totalQuantity:cartData.totalQuantity,
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Fetch Failed",
          message: "Fetching data failed",
        })
      );
    }
  };
};
export const cartActions = cartslice.actions;
export default cartslice;
