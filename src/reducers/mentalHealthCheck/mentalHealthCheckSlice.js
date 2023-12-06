import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRangeChanged: false,
  isClicked: false,
  isShown: false,
  value: 50,
}

const mentalHealthCheckSlice = createSlice({
  name: "mentalCheck",
  initialState,
  reducers: {
    handleView: (state) => {
      if(state.isShown == false) {
        state.isShown = true
      } else {
        state.isShown = false
      }
    },
    showContinueBtn: (state) => {
      state.isRangeChanged = true;
      
    },
    handleClickContinueBtn: (state) => {
      state.isClicked = true;
    },
    setValue: () => {

    }
  }
});

export const {
  handleView, 
  showContinueBtn, handleClickContinueBtn,
  setValue,
} = mentalHealthCheckSlice.actions;

export default mentalHealthCheckSlice.reducer;