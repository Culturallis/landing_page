import React from "react";
import * as S from "./styles.ts";
import YouTube from "react-youtube";

export const CardYoutube = () => {
  return (
    <S.CardYoutube>
      <S.Container>
        <S.Title className="fonteUnboundedBold">Acesso para Todos</S.Title>
        <div>
          {/* <YouTube
                        style={{ width: "100%", height: "27rem" }}
                        className="iframe"
                        videoId={"SgwzPGDl3c4"}
                    /> */}
        </div>
      </S.Container>
    </S.CardYoutube>
  );
};
