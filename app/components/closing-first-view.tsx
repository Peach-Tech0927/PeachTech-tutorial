import { Typography, Box } from "@mui/material";

const ClosingFirstView = () => {
  return (
    <>
      <Box
        position="relative"
        height={{ xs: 330, md: 660 }}
        sx={{
          backgroundImage: `url("/closing-first.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          height={"100%"}
          sx={{
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        >
          <Box
            display="flex"
            position="absolute"
            width={"100%"}
            justifyContent="center"
            alignItems="center"
            mt={{ xs: 10, md: 20 }}
            sx={{
              flexFlow: "column",
            }}
          >
            <Typography fontSize={{ xs: 15, md: 25 }} fontWeight="540" mb={2}>
              動画視聴お疲れ様でした！！
            </Typography>
            <Typography
              m="0 auto"
              fontWeight="540"
              fontSize={{ xs: 15, md: 25 }}
              mb={{ xs: 7.5, md: 15 }}
            >
              PeachTechチュートリアルはこれで完了です！
            </Typography>
            <Typography
              m="0 auto"
              fontWeight="540"
              fontSize={{ xs: 15, md: 25 }}
            >
              これから一緒に頑張りましょう！！
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ClosingFirstView;
