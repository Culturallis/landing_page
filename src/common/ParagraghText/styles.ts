import styled, { css } from "styled-components";

export const Text = styled.p(
  () => css`
    font-size: 1.57rem;
    color: #0e0e0e;
    line-height: 2rem;
    letter-spacing: 0.15rem;

    & > span {
      font-weight: bold;
    }
  `
);
