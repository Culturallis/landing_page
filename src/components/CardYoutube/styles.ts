import styled, { css } from "styled-components";
import YouTube from "react-youtube";

interface ICardYoutubeProps{
    linkVideo: string
}

export const CardYoutube = styled.div(() => css`
    background: #F3F3F3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 670px){
        width: 100%;
    }
`)

export const Container = styled.div(() => css`
    padding: 6rem 0rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 670px){
        width: 100%;
    }
`)

export const Title = styled.h3(() => css`
    font-size: 2.2rem;
    letter-spacing: 0.2rem;
    margin-bottom: 4rem;

    @media (max-width: 540px) {
        font-size: 1.6rem;
      }
`)

export const VideoYoutube = styled(YouTube)(() => css`
&&{
    style={{ width: "100%", height: "27rem" }}
    className="iframe"
    videoId={"SgwzPGDl3c4"}
}
`)