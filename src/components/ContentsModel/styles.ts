import styled, { css } from "styled-components";

interface IContentProps {
  hasBackground?: string;
}

export const Wrapper = styled.div<IContentProps>(
  ({ hasBackground }) => css`
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6rem 12rem;
    background: ${hasBackground ? hasBackground : "transparent"};

    @media (max-width: 1450px) {
      padding: 6rem 6rem;
    }
  `
);

export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 49%;

    & > .iframe {
      height: 100%;
      border-radius: 16px;
      overflow: hidden;
      border: none;
    }
  `
);

export const Title = styled.h3(
  () =>
    css`
      font-size: 2.2rem;
      letter-spacing: 0.2rem;

      @media (max-width: 1450px) {
        font-size: 2rem;
      }
    `
);
