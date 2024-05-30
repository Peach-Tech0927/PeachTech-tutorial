import { Box } from "@mui/material";
import VideoArea from "./video-area";
import PageTitle from "./page-title";
import { VideoPageProps } from "../const/video-page-data";

const VideoPage: React.FC<VideoPageProps> = ({
  step,
  title,
  detail,
  img,
  overView,
  href,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#fff7f7"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        p={{ xs: 3, md: 6 }}
      >
        <PageTitle step={step} title={title} detail={detail} />
        <VideoArea img={img} overView={overView} href={href} />
      </Box>
    </Box>
  );
};

export default VideoPage;
