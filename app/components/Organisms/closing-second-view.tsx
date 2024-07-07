import { Typography, Box } from "@mui/material";
import DecorationBar from "../Atoms/decoration-bar";
import WebTutorialButton from "../Atoms/web-tutorial-button";

const ClosingScondView = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#fff7f7"
      py={{ xs: 3, md: 4 }}
      px={{ xs: 3, md: 0 }}
    >
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        px={{ xs: 3, md: 40 }}
        py={{ xs: 8, md: 10 }}
      >
        <Typography
          fontSize={{ xs: 13, md: 30 }}
          fontWeight={"bold"}
          borderBottom={"1px solid #CCCCCC"}
        >
          Webサイト,Webアプリ開発に興味がある方へ
        </Typography>
        <Box textAlign="center" alignContent="center">
          <Typography
            lineHeight={2}
            fontSize={{ xs: 13, md: 16 }}
            my={{ xs: 1, md: 3 }}
            mt={{ xs: 2, md: 0 }}
          >
            Webプログラミングを実践的に学べるチュートリアルを用意しています！
            <br />
            PeachTechのプログラミング未経験者の多くがwebチュートリアルから始めています！
          </Typography>
          <Typography
            mt={{ xs: 5, md: 10 }}
            mb={5}
            fontSize={{ xs: 13, md: 16 }}
          >
            以下のような方にもおすすめです！
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexFlow: "column" }}
        >
          <Box
            bgcolor={"#F6F4F4"}
            px={{ md: 5 }}
            py={3}
            width={{ xs: "100%", md: "50%" }}
          >
            <Typography ml={{ xs: 4, md: 5 }} fontSize={{ xs: 13, md: 16 }}>
              ・早くプログラミングを学びたい人
              <br />
              ・実際になにか作ってみたい人
              <br />
              ・新しいことに挑戦したい人
              <br />
            </Typography>
          </Box>
          <Typography
            mt={{ xs: 6, md: 8 }}
            mb={4}
            fontSize={{ xs: 13, md: 16 }}
          >
            興味のある方は下のボタンをクリック
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <DecorationBar transform="rotate(-30deg)" />
          <DecorationBar transform="rotate(0deg)" />
          <DecorationBar transform="rotate(30deg)" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <WebTutorialButton />
        </Box>
      </Box>
    </Box>
  );
};

export default ClosingScondView;
