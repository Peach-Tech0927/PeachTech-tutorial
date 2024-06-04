import { Box } from "@mui/material";
import VideoArea from "./video-area";
import { VideoPageProps } from "../const/video-page-data";
import PageContents from "./page-contents";
import TopButton from "./top-button";
import CustomButton from "./custom-button";

const VideoPage: React.FC<VideoPageProps> = ({
  step,
  title,
  detail,
  img,
  contents,
  href,
  buttonText,
  nextButtonHref,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#fff7f7"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        p={{ xs: 3, md: 6 }}
      >
        <PageContents step={step} title={title} detail={detail} />
        <VideoArea img={img} contents={contents} href={href} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <TopButton />
          <CustomButton text={buttonText} href={nextButtonHref} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPage;
