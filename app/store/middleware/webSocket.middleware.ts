import { CombinedState, Middleware } from "@reduxjs/toolkit";
import { Socket, io } from "socket.io-client";
import { v4 } from "uuid";
import {
  ConnectionType,
  InitialState as InitialWebSocketState,
  WebSocketState,
} from "../features/webSocket.slice";
import appConfig from "../../../app.config.json";
import {
  InitialState as InitialChatState,
  Message,
  addMessage,
} from "../features/chat.slice";
import { InitialState as InitialAuthState } from "../features/auth.slice";
import { UserState } from "../features/auth.slice";

export type ServerToClientListen = {
  message: (message: Message) => void;
};

export type ClientToServerListen = {
  message: (message: Message) => void;
};

let socket: Socket<ServerToClientListen, ClientToServerListen>;

export const webSocketMiddleware: Middleware<
  {},
  CombinedState<{
    chatReducer: InitialChatState;
    webSocketReducer: InitialWebSocketState;
    authReducer: InitialAuthState;
  }>
> = (store) => (next) => (action) => {
  const webSocketState: WebSocketState = store.getState().webSocketReducer;
  const authState: InitialAuthState = store.getState().authReducer;
  const chatState: InitialChatState = store.getState().chatReducer;
  if (webSocketState.connection === ConnectionType.Connected && !socket) {
    socket = io(appConfig.webSocket.connect);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("connect_error", () => {
      console.log("connection error");
    });
    socket.on("message", (message) => {
      store.dispatch(addMessage(message));
    });
  } else if (webSocketState.connection === ConnectionType.Connected && socket) {
    if (action.type === "webSocket/send") {
      const message: Message = {
        id: v4(),
        socketId: socket.id,
        username: authState.user.username,
        text: chatState.value.inputText,
        date: JSON.stringify(new Date()),
      };
      socket.emit("message", message);
    }
  }

  next(action);
};
