import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: ChatState;
};

type ChatState = {
  isTyping: boolean;
  messages: string[];
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
    addMessage: (state, action: PayloadAction<string>) => {
      state.value.messages.push(action.payload);
    },
  },
});

export const {addMessage} = chat.actions;
export default chat.reducer;
