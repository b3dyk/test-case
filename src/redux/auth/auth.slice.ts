import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type User = {
  email: string;
  password: string;
};

interface IAuthInitState {
  data: null | User;
}

const authInitState: IAuthInitState = {
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },

    logoutAction: (state) => {
      state.data = null;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export const authReducer = persistReducer(
  { key: "auth", storage, whitelist: ["data"] },
  authSlice.reducer
);
