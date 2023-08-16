import React from "react";
import * as S from './styles.ts';

export const Slogan = ({text}) => {
    return(
        <S.Section>
            <S.Text className='fonteInterRegular'>{text}</S.Text>
        </S.Section>
    )
}