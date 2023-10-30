import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./auth.slice";

export type InitialState = {
  value: ChatState;
};

export type Message = {
  id: string;
  username: string;
  text: string;
  socketId: string;
  date?: string;
};

export type ChatState = {
  typingUsers: UserState[];
  inputText: string;
  messages: Message[];
};

const initialState: InitialState = {
  value: {
    typingUsers: [],
    inputText: "",
    messages: [],
  } as ChatState,
};

export const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.value.messages.push(action.payload);
    },
    setInputText: (state, action: PayloadAction<string>) => {
      state.value.inputText = action.payload;
    },
    addTypingUser: (state, action: PayloadAction<UserState>) => {
      if (
        state.value.typingUsers.filter((user) => user.id === action.payload.id)
          .length === 0
      ) {
        state.value.typingUsers.push(action.payload);
      }
    },
    removeTypingUser: (state, action: PayloadAction<UserState>) => {
      state.value.typingUsers = state.value.typingUsers.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addMessage, setInputText, addTypingUser, removeTypingUser } =
  chat.actions;
export default chat.reducer;
