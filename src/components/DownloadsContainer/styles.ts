import styled, { css } from "styled-components";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(
  () => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6rem 10rem 0 0;
    background-color: #f6f6f6;
  `
);

export const Image = styled.img(
  () => css`
    height: 100%;
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
      gap: 1rem;
    `
);

export const ImageLogo = styled.img(
  () => css`
    height: 100%;
  `
);

export const Title = styled.h1(
  () =>
    css`
      font-size: 2.8rem;
      text-weight: bold;
      text-align: center;
      text-transform: uppercase;
      position: absolute;
      bottom: 1rem;
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
    position: relative;
  `
);
