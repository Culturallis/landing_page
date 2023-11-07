import React from "react";
import * as S from "./styels.ts";

interface ICardPhotoProps {
  img: string;
  description?: string;
}

export const CardPhoto = (props: ICardPhotoProps) => {
  return (
    <>
      <S.CardImage src={props?.img} />
      {props?.description && (
        <S.Description className={"fonteUnboundedBold"}>
          {props?.description}
        </S.Description>
      )}
    </>
  );
};
