import React, { useState } from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import { userLogin } from './Auth.duck';
import { Input, Button } from 'components/ui'

import style from './Auth.module.scss';

export const Auth = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    console.log(process.env.endpoint);
    
    const handleLogin = () => {
        //TODO вынести запросы в service функции
        axios.post(`${process.env.endpoint}/auth`, {
            login: name,
            pass: pass
        }).then(resp => {
            console.log(resp);
            
        }).catch(err => {
            console.log(err);
        });
        dispatch(userLogin(true));
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPass(e.target.value);
    }

    return (
        <div className={style.form}>
            <Input defaultValue={name} onInput={handleChangeName} type='name' />
            <Input defaultValue={pass} onInput={handleChangePassword} type="password"/>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    )
}