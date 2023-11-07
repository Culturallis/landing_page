import React, { Fragment } from "react";
import { Navbar } from "./components/Navbar/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import { DownloadsContainer } from "./components/DownloadsContainer/index.tsx";
import { ContentsModel } from "./components/ContentsModel/index.tsx";
import { CardPhoto } from "./components/CardPhoto/index.tsx";
import Sobre_Culturallis from "./assets/images/Sobre_Culturallis.png";
import { ParagraphText } from "./common/ParagraghText/index.tsx";
import * as T from "./assets/texts/texts.ts";
import { FloatingWords } from "./components/FloatingWords/index.tsx";
import YouTube from "react-youtube";
import Historia_Culturallis from "./assets/images/Historia_Culturallis.png";
import { BigNumbers } from "./components/BigNumbers/index.tsx";
import { CellphonesModel } from "./components/CellphonesModel/index.tsx";
import * as S from "./styles.ts";
import { OurTeam } from "./components/OurTeam/index.tsx";
import { Slogan } from "./components/Slogan/index.tsx";

function Landing() {
  const opts = {
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <Navbar
        handleClickAboutUs={() => {
          const element = document.getElementById("about");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        handleClickResources={() => {
          const element = document.getElementById("resources");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        handleClickTellUs={() => {
          const element = document.getElementById("footer");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <DownloadsContainer />
      <ContentsModel
        firstChild={<CardPhoto img={Sobre_Culturallis}></CardPhoto>}
        idLocation={"about"}
        title={"SOBRE A CULTURALLIS"}
        secondChild={
          <Fragment>
            <ParagraphText
              text={
                <>
                  A Culturallis surgiu com o objetivo de diminuir a desigualdade
                  cultural e criar um ecossistema <span>completo</span> e{" "}
                  <span>igualitário</span> para todos os artistas e consumidores
                  de cultura.
                </>
              }
            />
            <ParagraphText text={T.sobreCulturalisBaixo} />
          </Fragment>
        }
      />
      {window.innerWidth < 1450 ? (
        <div
          style={{
            background: "#F3F3F3",
            padding: " 6rem 0rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <S.Title className="fonteUnboundedBold">Acesso para Todos</S.Title>
          <YouTube
            style={{ width: "60%", height: "32rem" }}
            className="iframe"
            videoId={"SgwzPGDl3c4"}
            opts={opts}
          />
        </div>
      ) : (
        <div
          style={{
            background: "#F3F3F3",
            padding: " 6rem 0rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <S.Title className="fonteUnboundedBold">Acesso para Todos</S.Title>
          <YouTube
            style={{ width: "60%", height: "35rem" }}
            className="iframe"
            videoId={"SgwzPGDl3c4"}
            opts={opts}
          />
        </div>
      )}

      <ContentsModel
        hasBackground="#F4B413"
        color="#EFEFEF"
        firstChild={<CardPhoto img={Historia_Culturallis} />}
        title="NOSSA HISTÓRIA"
        secondChild={
          <Fragment>
            <ParagraphText color="#Efefef" text={T.historiaCulturallisCima} />
            <ParagraphText color="#Efefef" text={T.historiaCulturallisBaixo} />
          </Fragment>
        }
      />
      <BigNumbers
        firstNumber={T.firstBigNumber}
        secondNumber={T.secondBigNumber}
        thirdNumber={T.thirdBigNumber}
      />
      <CellphonesModel
        idLocation={"resources"}
        direction="left"
        color="#982EAC"
        title={T.CellphonesFirstTitle}
        sectionName={T.SectionFirstTitle}
        sectionList={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={"Divulgação simples e dinâmica"}
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={"Diversos tipos de postagens"}
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Possibilidade de expandir
                  <br />
                  sua visão cultural
                </>
              }
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Exposição focada na
                  <br />
                  igualdade e interesses
                  <br />
                  pessoais
                </>
              }
            />
          </div>
        }
      />
      <CellphonesModel
        color="#E82E28"
        title={T.CellphonesSecondTitle}
        direction="right"
        sectionName={T.SectionSecondTitle}
        sectionList={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Aprenda com quem tem
                  <br />
                  mais experiência
                </>
              }
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={<>Conheça a fundo</>}
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Comece também
                  <br />a gerar cultura
                </>
              }
            />
            <ParagraphText
              sizeFont={"1.2rem"}
              nameClass={"fonteInterRegular"}
              color="#EFEFEF"
              text={
                <>
                  Acesso gratuito
                  <br />
                  ou pago
                </>
              }
            />
          </div>
        }
      />
      <OurTeam />
      <Slogan text={T.sloganText} />
      <Footer idLocation={"footer"} />
    </>
  );
}

export default Landing;
