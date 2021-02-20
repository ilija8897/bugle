import React from 'react';
import { Auth } from 'modules/Auth';
import { Chat } from 'modules/Chat';

import {useSelector} from 'react-redux';

import './App.module.scss';

export const App = () => {
    const isAuthorized = useSelector(state => state.auth.isAuth);
   
    return (
        <>
            {!isAuthorized ? <Auth /> : <Chat />}
        </>
    )
}