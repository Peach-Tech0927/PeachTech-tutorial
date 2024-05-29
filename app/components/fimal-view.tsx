import { Typography, Box } from "@mui/material";
import Image from "next/image";
import WebTutorialButton from "./web-tutorial-button";
import DecorationBar from "./decoration-bar";

const FinalView = () => {
  return (
    <>
      <Box bgcolor="#fff7f7">
        <Box textAlign="center" alignContent="center" bgcolor="#fff7f7">
          <Image
            src="/peachtech.png"
            width={150}
            height={150}
            alt="peachtechのアイコン"
          />
          <Typography fontWeight="bold" mt={-3}>
            PeachTech
          </Typography>
        </Box>
        <Box
          bgcolor="#ffffff"
          mx={{ xs: 1, md: 50 }}
          py={2}
          px={{ xs: 4, md: 19.8 }}
          my={3}
        >
          <Typography fontSize={{ xs: 15 }}>
            ・早くプログラミングを始めたい方
            <br />
            ・どんなことが学べるかいち早く知りたい方
          </Typography>
        </Box>
        <Box textAlign="center" alignContent="center">
          <Typography my={{ xs: 1, md: 3 }}>こちらもおすすめ！</Typography>
          <Box display="flex">
            <DecorationBar
              transform="rotate(-30deg)"
              marginl={{ xs: 20, md: 86 }}
            />
            <DecorationBar transform="rotate(0deg)" marginl={3} />
            <DecorationBar transform="rotate(30deg)" marginl={3} />
          </Box>
          <WebTutorialButton />
        </Box>
      </Box>
    </>
  );
};

export default FinalView;
