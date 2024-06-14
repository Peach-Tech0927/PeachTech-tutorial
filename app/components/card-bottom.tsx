import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CardBottomProps } from "../types/types";

const CardBottom: React.FC<CardBottomProps> = ({ title, number }) => {
  return (
    <Box display={"flex"} bgcolor={"#FF9DA7"} py={1.5}>
      <Typography color={"white"} ml={2.8}>
        {number}
      </Typography>
      <Box position={"absolute"} left={50} bottom={0}>
        <Box width={1.5} height={48} bgcolor={"white"} mr={1} />
      </Box>
      <Typography color={"white"} ml={4}>
        {title}
      </Typography>
      <KeyboardArrowRightIcon
        style={{ color: "white", position: "absolute", right: 4 }}
      />
    </Box>
  );
};

export default CardBottom;
