import { Typography, Box } from "@mui/material";
import DecorationBar from "../Atoms/decoration-bar";
import WebTutorialButton from "../Atoms/web-tutorial-button";

const ClosingSecondView = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#FFEFEF"}
      py={{ xs: 3, md: 4 }}
      px={{ xs: 3, md: 0 }}
    >
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        px={{ xs: 3, md: 10 }}
        pt={{ xs: 3.5, md: 6 }}
        pb={{ xs: 6, md: 8 }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography fontSize={{ xs: 13, md: 30 }} fontWeight={"bold"}>
            Webサイト,Webアプリ開発に興味がある方へ
          </Typography>
          <Box bgcolor={"#CCCCCC"} width={"80vw"} height={1.5} mt={1} />
        </Box>

        <Box textAlign={"center"} mt={2} px={{ xs: 3, md: 0 }}>
          <Typography lineHeight={2} fontSize={{ xs: 13, md: 16 }}>
            Webプログラミングを実践的に学べるチュートリアルを用意しています！
            <br />
            PeachTechのプログラミング未経験者の多くがwebチュートリアルから始めています！
            <br />
            以下のような方におすすめです！
          </Typography>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box
            bgcolor={"#F6F4F4"}
            px={{ md: 5, xs: 3 }}
            py={3}
            mt={{ xs: 3, md: 5 }}
          >
            <Typography fontSize={{ xs: 13, md: 16 }}>
              ・早くプログラミングを学びたい人
              <br />
              ・実際になにか作ってみたい人
              <br />
              ・新しいことに挑戦したい人
              <br />
            </Typography>
          </Box>
          <Typography mt={4} mb={3} fontSize={{ xs: 13, md: 16 }}>
            興味のある方は下のボタンをクリック
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <DecorationBar transform={"rotate(-30deg)"} />
          <DecorationBar transform={"rotate(0deg)"} />
          <DecorationBar transform={"rotate(30deg)"} />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <WebTutorialButton />
        </Box>
      </Box>
    </Box>
  );
};

export default ClosingSecondView;
