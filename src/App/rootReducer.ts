import { combineReducers } from '@reduxjs/toolkit';

import { ChatDuck } from 'modules/Chat';
import * as AppDuck from './App.duck';

const rootReducer = combineReducers({ chat: ChatDuck.chatSliceReducer, app: AppDuck.appSliceReducer });

export default rootReducer;