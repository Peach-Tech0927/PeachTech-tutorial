import React from "react";
import Card1 from "../components/card";
 import ShowCard from "../components/showcard";

import { Box, Typography, Icon, Button } from "@mui/material";


const page = () => {
  return (
    <Box bgcolor={"#fff7f7"} height={900} position={"relative"}>
      <Box position={"absolute"} margin={5}> 
        {/* ここでmarginとると背景色が適応されない部分が出来てしまう */}
        <ShowCard />
      </Box>
      <Box position={"absolute"} right={0} bottom={0}>
        <Button>
          <Typography color={"#798EFE"}>
            最後まで終わった方はこちら！
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default page;
