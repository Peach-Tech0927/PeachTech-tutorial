import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";

const FirstView = () => {
  return (
    <Box
      height={630}
      position={"relative"}
      sx={{
        bgcolor: "#CECECE",
        backgroundImage: `url("/img/seikei-library.jpeg")`,
      }}
    >
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        sx={{ WebkitBackdropFilter: "blue(8px)", backdropFilter: "blur(8px)" }}
      >
        <Typography fontSize={30} position={"absolute"} top={215} left={230}>
          PeachTechへようこそ！
        </Typography>
        <Button
          sx={{
            width: 160,
            color: "white",
            bgcolor: "#4AC3CB",
            position: "absolute",
            top: 340,
            left: 310,
            "&:hover": {
              background: "#F9A9A9",
            },
          }}
        >
          <Typography fontSize={21}>はじめる</Typography>
        </Button>
        <Image
          width={560}
          height={370}
          src={"/img/seikei-library.jpeg"}
          alt={"image-first-view"}
          style={{
            position: "absolute",
            top: 115,
            right: 120,
            borderRadius: 18,
          }}
        />
      </Box>
    </Box>
  );
};

export default FirstView;
