import React from "react";
import Bricks from "../../assets/images/bricks.png";
import * as S from "./styles.ts";
import logoCulturallis from "../../assets/images/logoCulturallisBigSize.png";
import PlayStore from "../../assets/images/PlayStore.png";
import AppStore from "../../assets/images/AppleStore.png";

export const DownloadsContainer = (
  linkPlayStore?: string,
  linkAppleStore?: string
) => {
  return (
    <S.Container>
      <S.Image src={Bricks} />
      <S.Wrapper>
        <S.InfoContainer>
          <S.LogoContainer>
            <S.ImageLogo src={logoCulturallis} />
            <S.Title className="fonteUnboundedBold">Culturallis</S.Title>
          </S.LogoContainer>
          <S.ContainerDownload>
            {/* <S.Navigate href={linkPlayStore} target="_blank"> */}
            <S.GooglePlay src={PlayStore} />
            {/* </S.Navigate> */}
            {/* <S.Navigate href={linkAppleStore} target="_blank">  TAGS SERÃO IMPLEMENTADAS FUTURAMENTE PARA LEVAR ATÉ O APP DO CULTURALLIS*/}
            <S.AppleStore src={AppStore} />
            {/* </S.Navigate> */}
          </S.ContainerDownload>
        </S.InfoContainer>
      </S.Wrapper>
    </S.Container>
  );
};
