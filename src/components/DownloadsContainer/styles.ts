import styled, { css } from "styled-components";
import Box from "@mui/material/Box";

export const Container = styled.div(
  () => css`
    display: flex;
    background-color: #f6f6f6;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1450px) {
      align-items: flex-end;
    }
  `
);

export const Wrapper = styled(Box)(
  () => css`
    display: flex;
    justify-content: flex-end;
    padding: 6rem 12rem;
    padding-top: 12rem;
    position: relative;
    background-color: #f6f6f6;

    @media (max-width: 1450px) {
      padding: 6rem 4rem;
    }
  `
);

export const Image = styled.img(
  () => css`
    width: 50%;
    z-index: 1;

    @media (max-width: 1450px) {
      height: 100%;
      width: fit-content;
    }
  `
);

export const InfoContainer = styled.div(
  () =>
    css`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    `
);

export const ImageLogo = styled.img(
  () => css`
    margin-bottom: 2rem;
  `
);

export const Title = styled.h1(
  () =>
    css`
      font-size: 2.8rem;
      text-weight: bold;
      text-align: center;
      text-transform: uppercase;
    `
);

export const ContainerDownload = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: 3rem;
  `
);

export const GooglePlay = styled.img(
  () =>
    css`
      height: 100%;
    `
);

export const AppleStore = styled.img(
  () =>
    css`
      height: 100%;
    `
);

export const Navigate = styled.a(
  () => css`
    cursor: pointer;
  `
);

export const LogoContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
);
