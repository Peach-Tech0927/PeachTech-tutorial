import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type TProps = {
  title: string;
  number: string;
};

const ThumbnailCardBottom: React.FC<TProps> = ({ title, number }) => {
  return (
    <Box display={"flex"} bgcolor={"#FF9DA7"} py={1.5}>
      <Typography color={"white"} ml={2.8} fontSize={14}>
        {number}
      </Typography>
      <Box position={"absolute"} left={50} bottom={0}>
        <Box width={1.5} height={48} bgcolor={"white"} mr={1} />
      </Box>
      <Typography color={"white"} ml={4} fontSize={14}>
        {title}
      </Typography>
      <KeyboardArrowRightIcon
        sx={{ color: "white", position: "absolute", right: 4 }}
      />
    </Box>
  );
};

export default ThumbnailCardBottom;
