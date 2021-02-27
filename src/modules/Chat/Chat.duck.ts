import { createSlice } from '@reduxjs/toolkit';


type ChatState = {
    messages: Message[]
}

type Message = {
    id: string,
    message: string
}

const initialState: ChatState = {
    messages: []
}

const chatReducer = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
        pushHistoryMessages: (state, action) => {
            state.messages = action.payload;
        }
    }
});

export const { actions: chatSliceActions, reducer: chatSliceReducer } = chatReducer;
export const { sendMessage, pushHistoryMessages } = chatSliceActions;
