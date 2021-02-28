import React, { FC, memo } from "react";

import * as S from './Button.styled';

interface ButtonProps {
    onClick?: () => void;
    children: string;
    type?: 'submit'
}

export const Button: FC<ButtonProps> = memo((props) => {
    return <S.Button onClick={props.onClick}>{props.children}</S.Button>
});
