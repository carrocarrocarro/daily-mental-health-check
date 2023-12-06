import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
}

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }
});

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;