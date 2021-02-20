import React, { useState } from 'react';

import { Button, Input } from 'components/ui';

import style from './MessageForm.module.scss';

export const MessageForm = ({socket}) => {
    const [inputVal, setInputVal] = useState<string>('');
    const handleTypeMessage = (e) => {
        setInputVal(e.target.value);
    }
    const handleSendMessage = () => {
        socket.emit('send_message', inputVal);
        setInputVal('');
    }

    return (
        <div className={style.form}>
            <Input defaultValue={inputVal} onInput={handleTypeMessage} />
            <Button onClick={handleSendMessage}>Send</Button>
        </div>
    )
}