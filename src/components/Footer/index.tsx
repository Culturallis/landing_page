import React from "react";
import * as S from './styles.ts';
import LogoApoliz from '../../assets/images/Logo_Apoliz.png'

export const Footer = () => {
    // Futuramente, cada componente de tag <a> estará ligada a um link
    return(
        <S.Footer>
            <S.Container>
                <S.LinksBox>
                    <S.Title className='fonteUnboundedBold'>Links úteis</S.Title>
                    <S.Link className='fonteInterRegular'>Saiba mais sobre a Culturallis</S.Link>
                    <S.Link className='fonteInterRegular'>Cadastre-se</S.Link>
                    <S.Link className='fonteInterRegular'>Suporte</S.Link>
                    <S.Link className='fonteInterRegular'>FAQ</S.Link>
                </S.LinksBox>
                <S.LinksBox>
                    <S.Title className='fonteUnboundedBold'>Contato</S.Title>
                    <S.Link className='fonteInterRegular'>E-mail</S.Link>
                    <S.Link className='fonteInterRegular'>Youtube</S.Link>
                    <S.Link className='fonteInterRegular'>Instagram</S.Link>
                    <S.Link className='fonteInterRegular'>Tik Tok</S.Link>
                </S.LinksBox>
                <S.LogoBox>
                    <S.TextLogo className='fonteInterRegular'>App By</S.TextLogo>
                    <S.ImageLogo src={ LogoApoliz }/>
                </S.LogoBox>
            </S.Container>
            <S.Copyright className='fonteInterRegular'>Culturallis <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /></S.Copyright>
        </S.Footer>
    )
}