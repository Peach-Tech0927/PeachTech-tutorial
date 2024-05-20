import FirstView from "./components/first-view";
import NextTopbutton from "./components/next-top-button";
import ThumbnailCardArea from "./components/thumbnail-card-area";

const Home = () =>{
  return (
    <>
      <FirstView />
      <ThumbnailCardArea />
      <NextTopbutton/>
    </>
  );
}

export default Home;