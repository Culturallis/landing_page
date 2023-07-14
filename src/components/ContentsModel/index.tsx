import React from "react";
import * as S from "./styles.ts";

interface IContentsModel {
  firstChild?: React.ReactNode;
  title?: string;
  secondChild?: React.ReactNode;
  hasBackground?: boolean | false;
}

export const ContentsModel = (props: IContentsModel) => {
  return (
    <S.Wrapper hasBackground={props.hasBackground}>
      <S.Container>{props?.firstChild}</S.Container>
      <S.Container>
        <S.Title className={"fonteUnboundedBold"}>{props?.title}</S.Title>
        {props?.secondChild}
      </S.Container>
    </S.Wrapper>
  );
};
