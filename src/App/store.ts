import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger';

import { ChatDuck } from 'modules/Chat';
import { AuthDuck } from 'modules/Auth';

const reducer = {
    chat: ChatDuck.chatSliceReducer,
    auth: AuthDuck.authSliceReducer
};

export const store = configureStore({
    reducer,
    middleware: [logger],
    devTools: true,
});