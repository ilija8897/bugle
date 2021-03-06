import React, { FC, memo, SyntheticEvent } from "react";

import * as S from './Input.styled';

type InputProps = {
    type?: 'text' | 'name' | 'password' | 'email';
    defaultValue: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    onInput?: (e: SyntheticEvent) => void;
}
 
export const Input: FC<InputProps> = memo((props) => {
    return <S.Input {...props} />;
})
