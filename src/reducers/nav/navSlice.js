import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      
      if(state.isOpen == false) {
        state.isOpen = true
      } else {
        state.isOpen = false
      }
    }
  }
});

export const { toggleNav } = navSlice.actions;

export default navSlice.reducer;