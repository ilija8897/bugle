import { createSlice } from '@reduxjs/toolkit';


type AppState = {
    isAuth: boolean,
}

const initialState: AppState = {
    isAuth: false
}

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.isAuth = action.payload;
        }
    }
});

export const { actions: appSliceActions, reducer: appSliceReducer } = appReducer;
export const { userLogin } = appSliceActions;