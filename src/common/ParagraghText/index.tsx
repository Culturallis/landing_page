import React from "react";
import * as S from "./styles.ts";

interface IParagraphTextprops {
  text: React.ReactNode;
}

export const ParagraphText = ({ text }: IParagraphTextprops) => {
  return <S.Text>{text}</S.Text>;
};
