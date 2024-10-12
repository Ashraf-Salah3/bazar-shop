import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  productData:localStorage.getItem("productData") 
   ? JSON.parse(localStorage.getItem("productData"))
   : [],
  userInfo: null,
};

const bazerSlice = createSlice({
  name: "BAZER",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const existingItem = state.productData.findIndex(
        item => item.id === action.payload.id
      );
      if (existingItem >= 0) {
        state.productData[existingItem].quantity += 1;
        toast.info(`${action.payload.title} increased by one`,{position:"top-left"})

      } else {
        state.productData.push({ ...action.payload, quantity: action.payload.quantity });

        toast.success(`${action.payload.title} is added`,{position:"top-left"})
      }
      localStorage.setItem("productData", JSON.stringify(state.productData))
    },
    DECREASE_CART: (state,action)=>{
      const productIndex = state.productData.findIndex(
        (item) => item.id === action.payload.id )

        if(state.productData[productIndex].quantity > 1){
          state.productData[productIndex].quantity -= 1

          toast.info(`${action.payload.title} decreased by one`,{position:"top-left"});

        }else if(state.productData[productIndex].quantity === 1) {
          const newCardItem = state.productData.filter(
            (item)=> item.id !== action.payload.id)

            state.productData = newCardItem

            toast.success(`${action.payload.title} removed from cart`,{position:"top-left"});
        }
        localStorage.setItem("productData", JSON.stringify(state.productData))
    },
    REMOVE_FROM_CART: (state, action)=>{
      const newCardItem = state.productData.filter(
        (item)=> item.id !== action.payload.id
      )
      state.productData = newCardItem

      toast.success(`${action.payload.title} is removed from Cart`,{position:"top-left"})

      localStorage.setItem("productData", JSON.stringify(state.productData))

    },
    CLEAR_CART : (state)=>{
      state.productData = []
      localStorage.setItem("productData", JSON.stringify(state.productData))
    },
  },
});

export const {ADD_TO_CART, INCREASE_CART, DECREASE_CART, REMOVE_FROM_CART, CLEAR_CART} = bazerSlice.actions;
export default bazerSlice.reducer;
