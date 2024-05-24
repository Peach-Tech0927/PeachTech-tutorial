import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { VideoPageProps } from "../const/video-view-data";

const VideoView: React.FC<VideoPageProps> = ({
  step,
  title,
  detail,
  img,
  overView,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#fff7f7"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        sx={{ p: { xs: 3, md: 6 } }}
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
          px={{ xs: 1, md: 1 }}
          mb={{ xs: 3, md: 4 }}
          fontSize={{ xs: 14, md: 16.5 }}
        >
          {detail}
          <br />
          見終わったら右下の次へボタンを押して次に進んでください！
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            mx={{ xs: 4 }}
          >
            <Image
              src={img}
              alt={""}
              width={500}
              height={300}
              layout="intrinsic"
              style={{ objectFit: "contain" }}
            />
            <Button
              variant="contained"
              sx={{
                px: { xs: 3, md: 4 },
                py: { md: 1 },
                fontSize: { xs: 14, md: 17 },
                position: "absolute",
                bottom: { xs: 22, md: 40 },
                zIndex: 1,
              }}
            >
              動画を見る
            </Button>
          </Box>
          <Box
            bgcolor={"#f2f1f1"}
            mb={{ xs: 10, md: 20 }}
            mt={{ xs: 4, md: 7 }}
            px={{ xs: 4, md: 8 }}
            py={{ xs: 1.5, md: 2 }}
          >
            <Typography
              fontSize={{ xs: 13, md: 16 }}
              fontWeight={"bold"}
              mb={{ xs: 0.5, md: 1 }}
            >
              概要
            </Typography>
            {overView.map((data) => (
              <Typography fontSize={{ xs: 12, md: 17 }}>・{data}</Typography>
            ))}
          </Box>
        </Box>
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
