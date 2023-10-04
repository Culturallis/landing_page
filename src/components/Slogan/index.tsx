import * as S from './styles.ts';

interface ISloganProps{
    text: string
}

export const Slogan = (props:ISloganProps) => {
    return(
        <S.SloganSection>
            <S.SloganText className="fonteInterRegular">{props.text}</S.SloganText>
        </S.SloganSection>
    )
}