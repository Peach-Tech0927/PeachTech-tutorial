"use client";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";

const FirstView = () => {
  return (
    <Box
      height={{ xs: 530, md: 630 }}
      position={"relative"}
      sx={{
        bgcolor: "#CECECE",
        backgroundImage: `url("/img/seikei-library.jpeg")`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "40%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        sx={{ WebkitBackdropFilter: "blue(8px)", backdropFilter: "blur(8px)" }}
      >
        <Typography
          fontSize={{ xs: 22, md: 30 }}
          position={"absolute"}
          top={{ xs: 360, md: 215 }}
          left={{ md: 230 }}
        >
          PeachTechへようこそ！
        </Typography>
        <Button
          sx={{
            width: { xs: 120, md: 160 },
            color: "white",
            bgcolor: "#4AC3CB",
            position: "absolute",
            top: { xs: 430, md: 340 },
            left: { md: 310 },
            "&:hover": {
              background: "#F9A9A9",
            },
          }}
        >
          <Typography fontSize={{ xs: 15, md: 21 }}>はじめる</Typography>
        </Button>
        <StyledImage
          width={560}
          height={370}
          src={"/img/seikei-library.jpeg"}
          alt={"image-first-view"}
        />
      </Box>
    </Box>
  );
};

const StyledImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    width: 560,
    height: 370,
    top: 115,
    right: 120,
    borderRadius: 18,
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    width: 340,
    height: 235,
    top: 60,
    borderRadius: 7,
  },
}));

export default FirstView;
