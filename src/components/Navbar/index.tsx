import React from "react";
import * as S from "./styles.ts";
import Logo_Culturallis from "../../assets/images/Logo_Culturallis.png";

export const Navbar = () => {
  return (
    <S.Navbar>
      <S.BoxAvatar>
        <S.BoxColor>
          <S.Logo src={Logo_Culturallis} />
        </S.BoxColor>
        <S.Triangle />
      </S.BoxAvatar>
      <S.PageTabs>
        <S.Title className={"fonteUnboundedBold"}>Sobre nós</S.Title>
        <S.Title className={"fonteUnboundedBold"}>Recursos</S.Title>
        <S.Title className={"fonteUnboundedBold"}>Contato</S.Title>
      </S.PageTabs>
    </S.Navbar>
  );
};
