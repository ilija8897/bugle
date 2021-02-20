import React from 'react';
import { useSelector } from 'react-redux';

import css from './ChatTextfield.module.scss';

export const ChatTextfield = () => {
    const messages = useSelector(store => store.chat.messages);

    const messageNodes = messages.map((m, index) => {
        return <p key={m.id+index}><span>{m.id}:</span><span>{m.message}</span></p>
    })
    
    return <div className={css.text}>{messageNodes}</div>
}