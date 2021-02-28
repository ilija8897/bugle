import React, { useState } from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import { userLogin } from '../../App/App.duck';
import { Input, Button } from 'components/ui'

import style from './Auth.module.scss';

export const Auth = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    const handleLogin = () => {
        //TODO вынести запросы в service функции
        axios.post(`${process.env.endpoint}/auth`, {
            login: name,
            pass: pass
        }).then(resp => {
            console.log(resp);
            dispatch(userLogin(true));     
        }).catch(err => {
            console.log(err);
            setError('Неверный логин или пароль');
        });
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
            {error}
            <Button onClick={handleLogin}>Login</Button>
        </div>
    )
}