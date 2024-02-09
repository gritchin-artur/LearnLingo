import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modals/modal-slice";
import teachersReducer from "./data/data-slise";
import favoriteReduser from "./data/favorite-slise";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  teachers: teachersReducer,
  favorite: favoriteReduser,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
