import { Box, Button, Typography } from "@mui/material";

const NextTopbutton = () => {
  return (
    <Box display="flex">
      <Button sx={{ color: "#5f82ff", ml: { xs: 1, md: 3 } }}>
        ＜　Topへ戻る
      </Button>
      <Box margin="0 0 0 auto">
        <Button
          variant="contained"
          sx={{ bgcolor: "#5f82ff", mr: { xs: 1, md: 3 }, borderRadius: 2 }}
        >
          次へ
        </Button>
      </Box>
    </Box>
  );
};

export default NextTopbutton;
