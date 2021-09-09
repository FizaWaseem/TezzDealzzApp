import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [] as Array<any>,
  user: {},
  // isLoggedIn: tokenAsyn!== null ? true : false,
  alreadyVerify: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // state.isLoggedIn = true;
      state.user = action.payload.data.user;
      // state.token = action.payload.data.token;
      console.log("payload", action.payload.data.user);
    },
    logout: (state) => {
      state.user = {};
      // state.isLoggedIn = false;
      // state.token =""
    },
    accountSignUp: (state) => {
      state.alreadyVerify = true;
    },
    accountNotSignUp: (state) => {
      state.alreadyVerify = false;
    },
    userId: (state, action) => {
      state.currentUser = action.payload;
      console.log("user_redux", action.payload);
    },
  },
});

export const { login, logout, userId } = authSlice.actions;

export default authSlice.reducer;
