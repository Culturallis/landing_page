import styled, { css } from "styled-components";
import Avatar from "@mui/material/Avatar";

export const Navbar = styled.nav(
  () => css`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    background-color: #8802c7;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.25);
    z-index: 1000000;
    position: fixed;
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
    border-width: 6rem 8rem 0 0px;
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

export const Title = styled.h2(
  () => css`
    font-size: 1.2rem;
    color: #f1f1f1;
    font-weight: bold;
  `
);
