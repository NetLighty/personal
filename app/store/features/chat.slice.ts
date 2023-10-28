import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  isTyping: boolean;
  inputText: string;
  messages: Message[];
};

const initialState: InitialState = {
  value: {
    isTyping: false,
    inputText: '',
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
      state.value.inputText = action.payload
    }
  },
});

export const { addMessage, setInputText } = chat.actions;
export default chat.reducer;
