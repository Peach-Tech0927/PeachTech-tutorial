import { Typography, Box } from "@mui/material";

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
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          pt={{ xs: 10, md: 20 }}
          flexDirection="column"
        >
          <Typography fontSize={{ xs: 15, md: 25 }} mb={2}>
            動画視聴お疲れ様でした！！
          </Typography>
          <Typography fontSize={{ xs: 15, md: 25 }} mb={{ xs: 7.5, md: 15 }}>
            PeachTechチュートリアルはこれで完了です！
          </Typography>
          <Typography fontSize={{ xs: 15, md: 25 }}>
            これから一緒に頑張りましょう！！
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClosingFirstView;
