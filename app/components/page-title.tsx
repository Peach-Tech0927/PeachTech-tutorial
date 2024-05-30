import { Box, Typography } from "@mui/material";
import { VideoPageProps } from "../const/video-page-data";

type PageTitleProps = Pick<VideoPageProps, "step" | "title" | "detail">;

const PageTitle: React.FC<PageTitleProps> = ({ step, title, detail }) => {
  return (
    <Box>
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
    </Box>
  );
};

export default PageTitle;
