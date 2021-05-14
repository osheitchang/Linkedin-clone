import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counter/counterAPI";

const initialState = {
  value: 0,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;