import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenRegister: false,
    isModalOpenLogIn: false,
    isModalOpenTrialLesson: false,
    isModalMobileOpen: false,
    isBookTrialLesson: [],
  },
  reducers: {
    openModalRegister: (state) => {
      state.isModalOpenRegister = true;
    },
    closeModalRegister: (state) => {
      state.isModalOpenRegister = false;
    },
    openModalLogIn: (state) => {
      state.isModalOpenLogIn = true;
    },
    closeModalLogIn: (state) => {
      state.isModalOpenLogIn = false;
    },
    openModalTrialLesson: (state) => {
      state.isModalOpenTrialLesson = true;
    },
    closeModalTrialLesson: (state) => {
      state.isModalOpenTrialLesson = false;
    },
    openModalMobile: (state) => {
      state.isModalMobileOpen = true;
    },
    closeModalMobile: (state) => {
      state.isModalMobileOpen = false;
    },
    addBookTrialLesson(state, { payload }) {
      state.isBookTrialLesson.splice(0, 1, payload);
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalRegister,
  closeModalRegister,
  openModalLogIn,
  closeModalLogIn,
  openModalTrialLesson,
  closeModalTrialLesson,
  openModalMobile,
  closeModalMobile,
  addBookTrialLesson,
} = modalSlice.actions;
