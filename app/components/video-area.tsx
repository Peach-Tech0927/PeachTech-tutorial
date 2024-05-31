import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { VideoPageProps } from "../const/video-page-data";

type VideoAreaProps = Pick<VideoPageProps, "img" | "href" | "contents">;

const VideoArea: React.FC<VideoAreaProps> = ({ img, href, contents }) => {
  return (
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
        mx={3}
      >
        <Image
          src={img}
          alt={"thumbnail-1"}
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "#5071E5",
            "&:hover": {
              background: "#3758CD",
            },
            px: { xs: 3, md: 4 },
            py: 1,
            fontSize: { xs: 14, md: 17 },
            position: "absolute",
            bottom: { xs: 22, md: 40 },
            zIndex: 1,
          }}
          href={href}
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
        {contents.map((data) => (
          <Typography fontSize={{ xs: 12, md: 17 }}>・{data}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default VideoArea;
