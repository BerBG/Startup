import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import TutorDisplay from "../../components/TutorDisplay/TutorDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

function Home() {

  const [category, setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <TutorDisplay category={category}/>
      <AppDownload/>
    </>
  );
}


export default Home;