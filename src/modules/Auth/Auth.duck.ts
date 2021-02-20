import { createSlice } from '@reduxjs/toolkit';


type AuthState = {
    isAuth: boolean
}

const initialState: AuthState = {
    isAuth: false
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.isAuth = action.payload;
        }
    }
});

export const { actions: authSliceActions, reducer: authSliceReducer } = authReducer;
export const { userLogin } = authSliceActions;
