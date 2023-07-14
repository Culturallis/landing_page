import styled, { css } from "styled-components";

interface IContentProps {
  hasBackground?: boolean;
}

export const Wrapper = styled.div<IContentProps>(
  ({ hasBackground }) => css`
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6rem 6rem;
    background: ${hasBackground ? "#F3F3F3" : "transparent"};
  `
);

export const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    width: 47%;

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
    `
);
