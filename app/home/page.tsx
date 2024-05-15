import React from "react";
import Card1 from "../components/card";
import { Box, Typography } from "@mui/material";

const page = () => {
  return (
    <Box bgcolor={"#fff7f7"} height={900}>
      <Card1 />
      <Typography>最後まで終わった方はこちら！</Typography>
    </Box>
  );
};

export default page;
