import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer from "./features/chat.slice";
import webSocketReducer from "./features/webSocket.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { webSocketMiddleware } from "./middleware/webSocket.middleware";

const rootReducer = combineReducers({
  chatReducer,
  webSocketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [webSocketMiddleware],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
