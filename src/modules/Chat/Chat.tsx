import React, { useEffect, useRef, useState } from "react";
import { ChatTextfield } from "components/ChatTextfield";
import style from "./main.module.scss";
import { useDispatch } from 'react-redux';
import {sendMessage} from './Chat.duck';
import { io } from "socket.io-client";
import { MessageForm } from "components/MessageForm";

const socket = io("https://bugle8897.herokuapp.com");

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on('add_message', message => {
      message && dispatch(sendMessage(message));
    })
    socket.on('connect', message => {
      socket.send('Hello!!');
    })

    return (() => {
      socket.close();
    })
  }, []);
  
  return (
    <main className={style.root}>
      <ChatTextfield />
      <MessageForm socket={socket} />
    </main>
  );
};