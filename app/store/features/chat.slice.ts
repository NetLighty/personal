import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  value: ChatState;
};

export type Message = {
  id: string;
  username: string;
  text: string;
  socketId: string;
  createdAt: Date;
};

export type ChatState = {
  isTyping: boolean;
  messages: Message[];
};

const initialState: InitialState = {
  value: {
    isTyping: false,
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
  },
});

export const { addMessage } = chat.actions;
export default chat.reducer;
