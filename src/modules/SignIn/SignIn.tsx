import React, { useState } from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import { Input, Button } from 'components/ui'

import style from './SignIn.module.scss';

export const SignIn = () => {
    const dispatch = useDispatch();

    const [nickName, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSignIn = () => {
        //TODO вынести запросы в service функции
        axios.post(`${process.env.endpoint}/sign`, {
            login: nickName,
            pass: pass
        }).then(resp => {
            console.log(resp);
            
        }).catch(err => {
            console.log(err);
        });
        // dispatch(userLogin(true));
    }

    const handleChangeName = (e) => {
        setNick(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPass(e.target.value);
    }

    return (
        <div className={style.form}>
            <Input defaultValue={nickName} onInput={handleChangeName} type='name' placeholder='You name' />
            <Input defaultValue={email} onInput={handleChangeName} type='email' placeholder='Email' />
            <Input defaultValue={pass} onInput={handleChangePassword} type="password" placeholder='Password' />
            <Input defaultValue={pass} onInput={handleChangePassword} type="password" placeholder='Repeat password' />
            <Button onClick={handleSignIn}>SignIn</Button>
        </div>
    )
}