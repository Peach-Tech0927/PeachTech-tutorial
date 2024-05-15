import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Card1 = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Typography fontSize={15} fontWeight ={"bold"} component="div">
          この動画を見よう！
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Card1;
