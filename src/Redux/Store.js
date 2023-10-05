import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./Slice";
// import { cartReducer } from "../Redux/CartSlice";
// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    formData: formDataReducer,
    //   cartdata: persistedReducer,
    // },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
  },
});

export default store;
// export const persistor = persistStore(store);
