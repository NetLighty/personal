import { ChatState } from "./features/chat.slice";
import { WebSocketState } from "./features/webSocket.slice";

export interface AppState {
    webSocket: WebSocketState,
    messages: ChatState,
}