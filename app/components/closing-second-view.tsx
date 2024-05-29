import { Typography, Box } from "@mui/material";
import Image from "next/image";
import DecorationBar from "./decoration-bar";
import CustomButton from "./next-button";

const ClosingScondView = () => {
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
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="white"
          mx={{ xs: 1, md: 50 }}
          py={4}
          my={3}
          gap={5}
        >
          <Typography lineHeight={3}>
            ・早くプログラミングを始めたい方
            <br />
            ・どんなことが学べるかいち早く知りたい方
          </Typography>
        </Box>
        <Box textAlign="center" alignContent="center">
          <Typography my={{ xs: 1, md: 3 }}>こちらもおすすめ！</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <DecorationBar transform="rotate(-30deg)" />
            <DecorationBar transform="rotate(0deg)" />
            <DecorationBar transform="rotate(30deg)" />
          </Box>
          <CustomButton
            text="Webチュートリアル"
            href="https://github.com/yusei53/PeachTech-web-tutorial"
          />
        </Box>
      </Box>
    </>
  );
};

export default ClosingScondView;
