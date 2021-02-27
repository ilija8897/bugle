import React, { useEffect, useRef, useState } from "react";
import { ChatTextfield } from "components/ChatTextfield";
import style from "./main.module.scss";
import { useDispatch } from 'react-redux';
import {sendMessage, pushHistoryMessages} from './Chat.duck';
import { io } from "socket.io-client";
import { MessageForm } from "components/MessageForm";

const socket = io(`${process.env.endpoint}`);

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.emit('messages_history');
    socket.on('add_message', message => {
      message && dispatch(sendMessage(message));
    });
    socket.on('push_history', messages => {
      const formatedMessages = messages.map(item => {
        return {id: item.user, message: item.text}
      })
      
      messages && dispatch(pushHistoryMessages(formatedMessages));
    });


    return (() => {
      socket.close();
    });
  }, []);
  
  return (
    <main className={style.root}>
      <ChatTextfield />
      <MessageForm socket={socket} />
    </main>
  );
};