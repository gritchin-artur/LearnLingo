import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenRegister: false,
    isModalOpenLogIn: false,
    // mealTypeBreakfast: null,
    // isModalCloseUserMenu: false,
    // isModalShowGoal: false,
    // isModalShowWeight: false,
    // isModalUpdateRecord: false,
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
    // showMealType: (state, action) => {
    //   state.mealTypeBreakfast = action.payload;
    // },
    // openModalUserMenu: (state) => {
    //   state.isModalCloseUserMenu = true;
    // },
    // closeModalUserMenu: (state) => {
    //   state.isModalCloseUserMenu = false;
    // },
    // openModalGoal: (state) => {
    //   state.isModalShowGoal = true;
    // },
    // closeModalGoal: (state) => {
    //   state.isModalShowGoal = false;
    // },
    // openModalWeight: (state) => {
    //   state.isModalShowWeight = true;
    // },
    // closeModalWeight: (state) => {
    //   state.isModalShowWeight = false;
    // },
    // openUpdateRecord: (state) => {
    //   state.isModalUpdateRecord = true;
    // },
    // closeUpdateRecord: (state) => {
    //   state.isModalUpdateRecord = false;
    // },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalRegister,
  closeModalRegister,
  openModalLogIn,
  closeModalLogIn,
  // showMealType,
  // openModalUserMenu,
  // closeModalUserMenu,
  // openModalGoal,
  // closeModalGoal,
  // openModalWeight,
  // closeModalWeight,
  // openUpdateRecord,
  // closeUpdateRecord,
} = modalSlice.actions;
