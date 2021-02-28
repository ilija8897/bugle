import React, { useState } from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux';
import { Input, Button } from 'components/ui'

import style from './SignIn.module.scss';

export const SignIn = () => {
    const dispatch = useDispatch();
    const [isRegistered, setStatus] = useState<boolean>(false);
    const [nickName, setNick] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [secondPass, setSecondPass] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    
    const handleSignIn = (e) => {
        e.preventDefault();

        //TODO вынести запросы в service функции
        !error && axios.post(`${process.env.endpoint}/sign`, {
            name: nickName,
            email: email,
            pass: pass
        }).then(resp => {
            setStatus(true);  
        }).catch(err => {
            setStatus(false);
        });
    }

    const handleChangeName = (e) => {
        setNick(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPass(e.target.value);
    }

    const handleChangeSecondPassword = (e) => {
        setSecondPass(e.target.value);
        pass !== e.target.value ? setError('пароли не совпадают') : setError(null);
    }

    return (
        !isRegistered ? (
            <form  onSubmit={handleSignIn} className={style.form}>
                <Input defaultValue={nickName} required onInput={handleChangeName} type='name' placeholder='You name' />
                <Input defaultValue={email} required onInput={handleChangeEmail} pattern={'[A-Za-z]{2,}@[A-Za-z]{2,}[.][A-Za-z]{2,}'} placeholder='Email' />
                <Input defaultValue={pass} required onInput={handleChangePassword} pattern={'[A-Za-z0-9]{8,}'} type="password" placeholder='Password' />
                <Input defaultValue={secondPass} required onInput={handleChangeSecondPassword} type="password" placeholder='Repeat password' />
                {error && error}
                <Button>SignIn</Button>
            </form>
        ) : <h1>Вы зарегистрированны</h1>
    );
}