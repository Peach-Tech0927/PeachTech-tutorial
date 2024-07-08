"use client";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";

const FirstViewArea = () => {
  return (
    <Box
      position={"relative"}
      height={{ xs: "65vh", md: "80vh" }}
      sx={{
        backgroundImage: `url("/seikei-library.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        height={"100%"}
        sx={{ WebkitBackdropFilter: "blue(8px)", backdropFilter: "blur(8px)" }}
      >
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
          mx={{ md: 7 }} //2つのBoxを横並びにする
        >
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"} //TypographyとButtonを縦並びにする
            mt={{ xs: 6, md: 0 }}
          >
            <Typography
              fontSize={{ xs: 22, md: 30 }}
              fontWeight={550}
              fontFamily={"revert"}
              letterSpacing={0.2}
              color={"#131313"}
              my={{ xs: 2, md: 3 }}
            >
              PeachTechへようこそ！
            </Typography>
            <Button
              href="/section1"
              sx={{
                px: { xs: 1, md: 3 },
                my: { xs: 1, md: 3 },
                color: "white",
                bgcolor: "#6376E3",
                fontSize: { xs: 15, md: 21 },
                "&:hover": {
                  background: "#5468DB",
                },
              }}
            >
              はじめる
            </Button>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <StyledImage
              width={560}
              height={370}
              src={"/seikei-library.jpeg"}
              alt={"image-first-view"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const StyledImage = styled(Image)(({ theme }) => ({
  borderRadius: 18,
  [theme.breakpoints.down("md")]: {
    width: 340,
    height: 235,
    borderRadius: 7,
    margin: 15,
  },
}));

export default FirstViewArea;
