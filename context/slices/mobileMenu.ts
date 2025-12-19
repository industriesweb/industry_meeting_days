import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const mobileMenu = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.isOpen = true;
    },
    setMenuClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setMenuOpen, setMenuClose } = mobileMenu.actions;
export default mobileMenu.reducer;
