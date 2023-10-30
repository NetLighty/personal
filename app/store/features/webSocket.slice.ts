import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ConnectionType {
  Disconnected,
  Connected,
}

export type WebSocketState = {
  connection: ConnectionType;
};

export type InitialState = {
  connection: ConnectionType;
};

const initialState: InitialState = {
  connection: ConnectionType.Disconnected,
};

export const webSocket = createSlice({
  name: "webSocket",
  initialState,
  reducers: {
    wsConnect(state) {
      state.connection = ConnectionType.Connected;
    },
    wsDisconnect(state) {
      state.connection = ConnectionType.Disconnected;
    },
    send() {},
    addTyping() {},
    removeTyping() {},
  },
});

export const { wsConnect, wsDisconnect, send, addTyping, removeTyping } = webSocket.actions;
export default webSocket.reducer;
