import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 12rem;

  @media (min-width: 1450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
  text-align: center;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  gap: 12rem;

  @media (min-width: 1450px) {
    width: 80%;
  }
`;

export const TitleTeam = styled.h2`
  width: fit:content;
  align-self: flex-end;
  font-size: 2.4rem;
`;

export const FirstGradeWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  flex-direction: column;
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 4rem;
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  width: 100%;
`;

export const Info = styled.h3`
  align-content: flex-start;
  font-size: 1.6rem;
  width: 100%;
`;

export const SecondGradeWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  flex-direction: column;
`;
