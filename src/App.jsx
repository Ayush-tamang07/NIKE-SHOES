import React from "react";
import Header from "./Components/Header/Header.jsx";
import TopBar from "./Components/TopBar/TopBar.jsx";
import Body from "./Components/Body/Body.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import WallHeader from "./Components/WallHeader/WallHeader.jsx";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Banner />
      <WallHeader />
      <Body />


    </>
  );
}

export default App;
