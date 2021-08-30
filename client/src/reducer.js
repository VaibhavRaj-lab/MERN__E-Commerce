import { stat } from "fs";
import product from "./utils/product";
export const initialState = {
  user: null,
  basket: [],
  session_id: null,
  Menulist: product,
  basket1: [],
};

const reducer = (state, action) => {
  console.log(action);
  console.log(state.Menulist);
  // console.log(state);
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Update_List":
      return {
        ...state,
        Menulist: action.item,
      };
    case "Remove_From_Basket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
        console.log("done");
      } else {
        console.warn(`Cant remove proudct`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "Empty_Basket":
      return {
        ...state,
        basket: [],
      };
    case "Create_User":
      return {
        ...state,
        user: action.user,
      };
    case "Set_SessionId":
      return {
        ...state,
        sessiod_id: action.id,
      };
    case "Basket_for_order":
      return {
        ...state,
        basket1: action.items,
      };
    default:
      return state;
  }
};
export default reducer;
