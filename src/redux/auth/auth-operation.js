import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

export const logUp = createAsyncThunk("auth/logUp", async (values) => {
  try {
    await createUserWithEmailAndPassword(auth, values.email, values.password);

    await updateProfile(auth.currentUser, {
      displayName: values.name,
    });

    const { uid, displayName, email } = auth.currentUser;
    toast.success(`Welcome ${email} 🤝`);
    return { uid, displayName, email };
  } catch (e) {
    return { error: e.message };
  }
});

export const logIn = createAsyncThunk("auth/logIn", async (body) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );

    const { uid, displayName, email } = response.user;
    toast.success(`Welcome ${email} 🤝`);
    return { uid, displayName, email };
  } catch (e) {
    return { error: e.message };
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_) => {
  try {
    await signOut(auth);
    toast.success(`Bye 👋`);
  } catch (e) {
    return { error: e.message };
  }
});
