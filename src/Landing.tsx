import React, { Fragment, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { DownloadsContainer } from "./components/DownloadsContainer";
import { ContentsModel } from "./components/ContentsModel";
import { CardPhoto } from "./components/CardPhoto";
import Sobre_Culturallis from "./assets/images/Sobre_Culturallis.png";
import { ParagraphText } from "./common/ParagraghText";
import * as T from "./assets/texts/texts";
import YouTube from "react-youtube";
import Historia_Culturallis from "./assets/images/Historia_Culturallis.png";
import { BigNumbers } from "./components/BigNumbers";
import { CellphonesModel } from "./components/CellphonesModel";
import * as S from "./styles";
import { OurTeam } from "./components/OurTeam";
import { Slogan } from "./components/Slogan";
import { database } from "./firebaseConnection";
import { onValue, ref } from "firebase/database";

function Landing() {
  const opts = {
    height: "100%",
    width: "100%",
  };

  const [data, setData] = useState<any>();

  useEffect(() => {
    const dadosRef = ref(database, "Culturallis-LandingPage");

    const unsubscribe = onValue(dadosRef, (snapshot) => {
      if (snapshot.exists()) {
        const resultData = snapshot.val();
        setData(resultData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (data) {
      console.log("Categorias count: ", Object.keys(data?.Categorias).length);
      console.log("Cursos count: ", Object.keys(data?.Cursos).length);
      console.log("Posts count: ", Object.keys(data?.Posts).length);
      console.log("Usuários count: ", Object.keys(data?.Usuarios).length);
    }
  }, [data]);

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
