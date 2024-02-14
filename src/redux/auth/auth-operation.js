import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const logUp = createAsyncThunk(
  "auth/logUp",
  async (values, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        values.name,
        values.email,
        values.password
      );

      await updateProfile(auth.currentUser, {
        displayName: values.name,
      });

      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (e) {
      return { error: e.message };
    }
  }
);

export const logIn = createAsyncThunk("auth/logIn", async (body, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );

    const { uid, displayName, email } = response.user;

    return { uid, displayName, email };
  } catch (e) {
    return { error: e.message };
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (e) {
    return { error: e.message };
  }
});
