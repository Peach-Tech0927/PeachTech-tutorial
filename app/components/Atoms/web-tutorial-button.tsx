import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button } from "@mui/material";

const WebTutorialButton = () => {
  return (
    <Box position={"relative"} display={"flex"} alignItems={"center"}>
      <Button
        variant={"contained"}
        href={"/section7"}
        sx={{
          bgcolor: "#3D64CA",
          borderRadius: 10,
          pr: 5,
          fontSize: { xs: 13, md: 16 },
        }}
      >
        Webチュートリアルとは
      </Button>

      <Box
        position={"absolute"}
        width={15}
        height={15}
        bgcolor={"white"}
        right={15}
        borderRadius={"50%"}
      />
      <KeyboardArrowRightIcon
        fontSize={"small"}
        sx={{ position: "absolute", right: 12, color: "#3D64CA" }}
      />
    </Box>
  );
};
export default WebTutorialButton;
