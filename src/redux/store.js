import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modals/modal-slice";
import teachersReducer from "./data/data-slise";
import favoriteReduser from "./data/favorite-slise";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favorite", "modal", "teachers"],
};

const rootReducer = combineReducers({
  teachers: teachersReducer,
  favorite: favoriteReduser,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
