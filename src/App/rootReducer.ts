import { combineReducers } from '@reduxjs/toolkit';

import { ChatDuck } from 'modules/Chat';
import { AuthDuck } from 'modules/Auth';

const rootReducer = combineReducers({ chat: ChatDuck.chatSliceReducer, auth: AuthDuck.authSliceReducer });

export default rootReducer;