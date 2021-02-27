import React, { useState } from 'react';
import { Auth } from 'modules/Auth';
import { Chat } from 'modules/Chat';
import { SignIn } from 'modules/SignIn';

import {useSelector} from 'react-redux';

import css from './App.module.scss';

type AuthState = 'sign' | 'login' | undefined;

export const App = () => {
    const isAuthorized = useSelector(state => state.app.isAuth);

    const [authState, setAuthState] = useState<AuthState>(undefined);

    const handleSelectEnter = (type: AuthState) => {
        setAuthState(type);
    }

    let form;
    switch (authState) {
        case 'sign':
            form = <SignIn />;
            break;
        case 'login':
            form = <Auth />;
            break;
        default:
            form = <><span onClick={() => handleSelectEnter('sign')}>Sign in</span>/<span onClick={() => handleSelectEnter('login')}>Log in</span></>
            break;
    }
   
    return (
        <div className={css.root}>
            {!isAuthorized ? form : <Chat />}
        </div>
    )
}