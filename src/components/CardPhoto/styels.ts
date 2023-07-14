import styled, { css } from "styled-components";

export const CardImage = styled.img(
  () => css`
    max-width: 40rem;
    height: 100%;
  `
);

export const Description = styled.p(
  () => css`
    font-size: 1.8rem;
  `
);
