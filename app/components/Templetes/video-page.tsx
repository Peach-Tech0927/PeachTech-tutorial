import { Box } from "@mui/material";
import VideoArea from "../Organisms/video-area";
import PageContents from "../Organisms/page-content-area";
import TopButton from "../Atoms/top-button";
import CustomButton from "../Atoms/custom-button";
import { VideoPageProps } from "../../types/types";

const VideoPage: React.FC<VideoPageProps> = ({
  step,
  title,
  detail,
  img,
  contents,
  href,
  buttonText,
  nextButtonHref,
  isNotWebTutorial = true,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#FCEBEB"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        p={{ xs: 3, md: 6 }}
      >
        <PageContents
          step={step}
          title={title}
          detail={detail}
          isNotWebTutorial={isNotWebTutorial}
        />
        <VideoArea img={img} contents={contents} href={href} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <TopButton />
          <CustomButton text={buttonText} href={nextButtonHref} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPage;
