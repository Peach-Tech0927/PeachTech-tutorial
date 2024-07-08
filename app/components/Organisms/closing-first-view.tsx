import { Typography, Box } from "@mui/material";
import Image from "next/image";

const ClosingFirstView = () => {
  return (
    <Box
      height={{ xs: "45vh", md: "75vh" }}
      sx={{
        backgroundImage: `url("/peachtech-welcome.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        height={"100%"}
        sx={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255,255,255,0.6)",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          pt={{ xs: 2, md: 15 }}
          flexDirection="column"
        >
          <Image
            src="/peachtech.png"
            width={150}
            height={150}
            alt="peachtechのアイコン"
          />
          <Typography fontWeight="bold" mt={-3}>
            PeachTech
          </Typography>

          <Typography
            fontSize={{ md: 25 }}
            mb={2}
            mt={{ xs: 3, md: 8 }}
            fontWeight={"bold"}
            color={"#515151"}
          >
            peachtechチュートリアルお疲れ様でした！！
          </Typography>

          <Typography
            fontSize={{ md: 25 }}
            fontWeight={"bold"}
            color={"#515151"}
          >
            これから一緒に頑張りましょう！！
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClosingFirstView;
