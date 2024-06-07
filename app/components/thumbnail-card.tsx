import { Card, CardActionArea, Typography, Box } from "@mui/material";
import Image from "next/image";
import { cardDataProps } from "../types/types";

const ThumbnailCard: React.FC<cardDataProps> = ({
  title,
  imageSrc,
  number,
  href,
}) => {
  return (
    <Card sx={{ maxWidth: "auto", borderRadius: "20px" }}>
      <CardActionArea sx={{ px: 1 }} href={href}>
        <Box display={"flex"} py={2}>
          <Image src={number} width={45} height={45} alt="サンプル画像" />
          <Typography fontSize={{ xs: 23, md: 20 }} marginTop={1.5}>
            {title}
          </Typography>
        </Box>
        <Box pb={2} px={2}>
          <Image src={imageSrc} width={250} height={160} alt="サンプル画像" />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ThumbnailCard;
