import { Card, CardActionArea, Box } from "@mui/material";
import Image from "next/image";
import { CardDataProps } from "../../types/types";
import ThumbnailCardBottom from "../Atoms/thumbnail-card-bottom";

const ThumbnailCard: React.FC<CardDataProps> = ({
  title,
  number,
  imageSrc,
  href,
}) => {
  return (
    <Card sx={{ minWidth: 300, borderRadius: "15px", position: "relative" }}>
      <CardActionArea href={href}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={5}
        >
          <Image src={imageSrc} width={80} height={80} alt={"サンプル画像"} />
        </Box>
        <ThumbnailCardBottom title={title} number={number} />
      </CardActionArea>
    </Card>
  );
};

export default ThumbnailCard;
