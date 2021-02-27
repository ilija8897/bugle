import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger';

import { ChatDuck } from 'modules/Chat';
import * as AppDuck from './App.duck';

const reducer = {
    chat: ChatDuck.chatSliceReducer,
    app: AppDuck.appSliceReducer
};

export const store = configureStore({
    reducer,
    middleware: [logger],
    devTools: true,
});