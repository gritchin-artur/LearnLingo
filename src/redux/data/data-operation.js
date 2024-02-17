import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, child, get } from "firebase/database";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_) => {
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "/"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const allTeachers = Object.values(data);

        return allTeachers;
      } else {
        toast.warn("No data available");
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    }
  }
);
