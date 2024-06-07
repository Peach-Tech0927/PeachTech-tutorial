import { Card, CardActionArea, Typography, Box } from "@mui/material";
import Image from "next/image";
import { cardDataProps } from "../types/types";
import Link from "next/link";

const ThumbnailCard: React.FC<cardDataProps> = ({
  title,
  imageSrc,
  number,
  href,
}) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: "auto", borderRadius: "20px" }}>
        <CardActionArea sx={{ px: 1 }}>
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
    </Link>
  );
};

export default ThumbnailCard;
