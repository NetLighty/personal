import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export type InitialState = {
  user: UserState;
};

export type UserState = {
  id: string;
  username: string;
};

const initialState: InitialState = {
  user: {
    id: "",
    username: "",
  } as UserState,
};

export const userKey = "user";

export const createLocalUser = () => {
  const uuidv4 = v4();
  const user: UserState = {
    id: uuidv4,
    username: `user${uuidv4}`,
  };
  localStorage.setItem(userKey, JSON.stringify(user));
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initUser: (state) => {
      if (!localStorage.getItem(userKey)) {
        createLocalUser();
      }
      const localUser: UserState = JSON.parse(localStorage.getItem(userKey)!);
      state.user.id = localUser.id;
      state.user.username = localUser.username;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user.id = action.payload.id;
      state.user.username = action.payload.username;
    },
  },
});

export const { setUser, initUser } = auth.actions;
export default auth.reducer;
