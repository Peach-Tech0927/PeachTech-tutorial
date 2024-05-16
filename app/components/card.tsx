import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import Healthicons1Outline from "../components/icons";

const Card1 = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box  display={"flex"}>
          <Healthicons1Outline />
          <Typography fontSize={20} component="div" marginTop={1.5} >
            この動画を見よう！
          </Typography>
        </Box>
        <Box marginLeft={3}>
        <Image src="/sample.png" width={280} height={180} alt="サンプル画像" />
        </Box>
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
};



export default Card1;
