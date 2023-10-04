import React from "react";
import * as S from "./styles.ts";

interface IContentsModel {
  firstChild?: React.ReactNode;
  title?: string;
  secondChild?: React.ReactNode;
  hasBackground?: string;
  color?: string;
  idLocation?: string;
}

export const ContentsModel = (props: IContentsModel) => {
  return (
    <S.Wrapper hasBackground={props.hasBackground} id={props.idLocation}>
      <S.Container>{props?.firstChild}</S.Container>
      <S.Container style={{ color: props.color }} className="fonteInterRegular">
        <S.Title
          style={{ color: props?.color }}
          className={"fonteUnboundedBold"}
        >
          {props?.title}
        </S.Title>
        {props?.secondChild}
      </S.Container>
    </S.Wrapper>
  );
};
