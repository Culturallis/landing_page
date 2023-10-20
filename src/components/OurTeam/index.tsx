import * as S from "./styles";
import ana from "../../assets/images/anaDamasceno.png";
import mirella from "../../assets/images/mirellaMiyakawa.png";
import helena from "../../assets/images/helenaCosta.jpg";
import arthurMac from "../../assets/images/arthurMacedo.jpg";
import gabriel from "../../assets/images/gabrielFidalgo.jpg";
import enzo from "../../assets/images/enzoHino.png";
import mayla from "../../assets/images/maylaRenze.png";
import camilla from "../../assets/images/camillaUcci.jpg";
import pedro from "../../assets/images/pedroSchettini.jpeg";
import arthuMica from "../../assets/images/arthurMicarelli.jpg";
import davi from "../../assets/images/daviPiassi.png";
import artur from "../../assets/images/arturCassuriaga.png";

export const OurTeam = () => {
  const firstLinePeople = [
    { name: "Arthur Micarelli", photo: arthuMica },
    { name: "Artur Cassuriaga", photo: artur },
    { name: "Camilla Ucci", photo: camilla },
    { name: "Davi Piassi", photo: davi },
  ];

  const secondLinePeople = [
    { name: "Enzo Hino", photo: enzo },
    { name: "Mayla Renze", photo: mayla },
    { name: "Pedro Schettini", photo: pedro },
  ];

  const firstLinePeopleSecond = [
    { name: "Ana Damasceno", photo: ana },
    { name: "Helena Costa", photo: helena },
    { name: "Mirella Miyakawa", photo: mirella },
  ];

  const secondLinePeopleSecond = [
    { name: "Arthur Macedo", photo: arthurMac },
    { name: "Gabriel Fidalgo", photo: gabriel },
  ];

  return (
    <S.Wrapper>
      <S.Title className="fonteInterRegular">
        Culturallis é a primeira rede social com cursos
        <br />
        100% focada em cultura para diminuição da
        <br />
        desigualdade social
      </S.Title>
      <S.TeamWrapper>
        <S.FirstGradeWrapper>
          <S.TitleTeam className="fonteUnboundedBold">NOSSO TIME</S.TitleTeam>
          <S.FirstLine>
            {firstLinePeople.map((item) => (
              <img
                key={item.name}
                alt={item.name}
                style={{
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "100%",
                  border: "solid 2px #0e0e0e",
                }}
                src={item.photo}
              />
            ))}
          </S.FirstLine>
          <S.SecondLine>
            <S.Info className="fonteUnboundedBold">FUNDADORES</S.Info>
            {secondLinePeople.map((item) => (
              <img
                key={item.name}
                alt={item.name}
                style={{
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "100%",
                  border: "solid 2px #0e0e0e",
                }}
                src={item.photo}
              />
            ))}
          </S.SecondLine>
        </S.FirstGradeWrapper>
        <S.SecondGradeWrapper>
          <S.FirstLine>
            {firstLinePeopleSecond.map((item) => (
              <img
                key={item.name}
                alt={item.name}
                style={{
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "100%",
                  border: "solid 2px #0e0e0e",
                }}
                src={item.photo}
              />
            ))}
          </S.FirstLine>
          <S.SecondLine>
            <S.Info className="fonteUnboundedBold">
              SUPORTE DE
              <br />
              DESENVOLVIMENTO
            </S.Info>
            {secondLinePeopleSecond.map((item) => (
              <img
                key={item.name}
                alt={item.name}
                style={{
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "100%",
                  border: "solid 2px #0e0e0e",
                }}
                src={item.photo}
              />
            ))}
          </S.SecondLine>
        </S.SecondGradeWrapper>
      </S.TeamWrapper>
    </S.Wrapper>
  );
};
