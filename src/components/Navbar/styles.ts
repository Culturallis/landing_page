import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export const Navbar = styled(Box)(
  () => css`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    background-color: #8802c7;
  `
);

export const BoxAvatar = styled.div(
  () => css`
    width: 60%;
    height: 100%;
    display: flex;
  `
);

export const BoxColor = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    background: #a200ee;
    display: flex;
    align-items: center;
    padding-left: 2rem;
  `
);

export const Triangle = styled.div(
  () => css`
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 8vh 8rem 0 0px;
    border-color: #a200ee transparent transparent transparent;
  `
);

export const Logo = styled(Avatar)(
  () => css`
    height: 8rem;
    width: 8rem;
    & > img {
      height: 4rem;
      width: 4rem;
    }
  `
);

export const PageTabs = styled.div(
  () =>
    css`
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 2rem;
    `
);

export const Title = styled(Typography)(
  () => css`
    font-size: 1.8rem;
    color: #f1f1f1;
    text-weight: bold;
  `
);
