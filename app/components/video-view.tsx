import { Box, Typography } from "@mui/material";
import { VideoPageProps } from "../const/video-view-data";
import VideoArea from "./video-area";

const VideoView: React.FC<VideoPageProps> = ({
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
        <Box borderBottom={1} borderColor={"#c9c9c9"} display={"flex"} p={0.5}>
          <Typography
            fontSize={{ xs: 17, md: 23 }}
            fontWeight={"bold"}
            mr={{ xs: 1, md: 2 }}
          >
            Step{step}
          </Typography>
          <Typography fontSize={{ xs: 17, md: 23 }} fontWeight={"bold"}>
            {title}
          </Typography>
        </Box>
        <Typography
          py={{ xs: 2, md: 3 }}
          px={1}
          mb={{ xs: 3, md: 4 }}
          fontSize={{ xs: 14, md: 17 }}
        >
          {detail}
          <br />
          見終わったら右下の次へボタンを押して次に進んでください！
        </Typography>
        <VideoArea img={img} overView={overView} href={href} />
        {/* <Button
          variant="contained"
          sx={{ position: "absolute", right: 30, bottom: 30 }}
        >
          モック
        </Button>
        <Button
          variant="contained"
          sx={{ position: "absolute", left: 30, bottom: 30 }}
        >
          モック
        </Button> */}
      </Box>
    </Box>
  );
};

export default VideoView;
