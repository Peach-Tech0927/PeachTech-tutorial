import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Card1 = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Typography fontSize={20} component="div">
          この動画を見よう！
        </Typography>
        <Image src="/sample.png" width={300} height={200} alt="サンプル画像" />
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Card1;
