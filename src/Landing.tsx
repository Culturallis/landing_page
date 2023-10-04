import React, { Fragment, useEffect, useState } from "react";
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
import { Slogan } from "./components/Slogan/index.tsx";
import { database } from "./firebaseConnection.tsx";
import { onValue, ref } from "firebase/database";

function Landing() {
  const opts = {
    height: "100%",
    width: "100%",
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const dadosRef = ref(database, "data");

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
    console.log(data);
  }, [data]);

  return (
    <>
      <Navbar />
      <DownloadsContainer />
      <ContentsModel
        firstChild={<CardPhoto img={Sobre_Culturallis}></CardPhoto>}
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
      <ContentsModel
        firstChild={<FloatingWords />}
        title={"VÍDEO INSTITUCIONAL"}
        hasBackground
        secondChild={
          <Fragment>
            <YouTube
              className="iframe"
              videoId={"SgwzPGDl3c4"}
              opts={opts}
            ></YouTube>
          </Fragment>
        }
      />
      <ContentsModel
        firstChild={<CardPhoto img={Historia_Culturallis} />}
        title="NOSSA HISTÓRIA"
        secondChild={
          <Fragment>
            <ParagraphText text={T.historiaCulturallisCima} />
            <ParagraphText text={T.historiaCulturallisBaixo} />
          </Fragment>
        }
      />
      <BigNumbers
        firstNumber={T.firstBigNumber}
        secondNumber={T.secondBigNumber}
        thirdNumber={T.thirdBigNumber}
        description={T.bigNumbersDescription}
      />
      <Slogan text={T.sloganText} />
      <Footer />
    </>
  );
}

export default Landing;
