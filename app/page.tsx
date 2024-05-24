import { Box } from "@mui/material";
import FirstView from "./components/first-view";
import NextButton from "./components/next-button";
import ThumbnailCardArea from "./components/thumbnail-card-area";
import TopButton from "./components/top-button";

const Home = () => {
  return (
    <>
      <FirstView />
      <ThumbnailCardArea />
      <Box display="flex">
        <TopButton />
        <NextButton text="次へ" href="/" />
      </Box>
    </>
  );
};

export default Home;
