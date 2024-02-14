import { createSlice } from "@reduxjs/toolkit";
import { logUp, logIn, logOut } from "./auth-operation";
import toast from "react-hot-toast";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isAuthLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
      avatar: payload.avatar,
      isAuth: true,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(logUp.pending, (state, { payload }) => {
        state.isAuthLoading = true;
      })
      .addCase(logUp.fulfilled, (state, { payload }) => {
        if (!payload.error) {
          state.userId = payload.uid;
          state.login = payload.displayName;
          state.email = payload.email;
          state.isAuth = true;
          state.isAuthLoading = false;
        } else {
          console.error(payload.error);
          toast.error(`${payload.error}`);
          state.isAuthLoading = false;
        }
      })
      .addCase(logUp.rejected, (state, { error }) => {
        console.error(error);
        toast.error(`${error}`);
        state.isAuthLoading = false;
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.isAuthLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        if (!payload.error) {
          state.userId = payload.uid;
          state.login = payload.displayName;
          state.email = payload.email;
          state.isAuth = true;
          state.isAuthLoading = false;
        } else {
          state.isAuthLoading = false;
          console.error(payload.error);
          toast.error(`${payload.error}`);
        }
      })
      .addCase(logIn.rejected, (state, { error }) => {
        console.error(error);
        toast.error(`${error}`);
        state.isAuthLoading = false;
      })
      .addCase(logOut.pending, (state, { payload }) => {
        state.isAuthLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.userId = null;
        state.login = null;
        state.email = null;
        state.isAuth = false;
        state.isAuthLoading = false;
      })
      .addCase(logOut.rejected, (state, { error }) => {
        console.error(error);
        toast.error(`${error}`);
        state.isAuthLoading = false;
      });
  },
});

export const { getCurrentUser } = authSlice.actions;

export default authSlice.reducer;
