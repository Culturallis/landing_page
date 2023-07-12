import React from "react";
import { Navbar } from "./components/Navbar/index.tsx";
import { DownloadsContainer } from "./components/DownloadsContainer/index.tsx";

function Landing() {
  return (
    <>
      <Navbar />
      <DownloadsContainer />{" "}
    </>
  );
}

export default Landing;
