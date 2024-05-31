import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { TextWithImageAreaProps } from "../const/text-with-image-page-data";

const TextWithImageArea: React.FC<TextWithImageAreaProps> = ({
  title,
  detail,
  img,
}) => {
  return (
    <Box px={1} mt={7} mb={{ xs: 10, md: 14 }}>
      <Typography fontWeight={"bold"} fontSize={{ xs: 15, md: 19 }}>
        {title}
      </Typography>
      <Typography fontSize={{ xs: 13, md: 16 }} mt={1}>
        {detail}
      </Typography>
      <Box mx={{ xs: 0, md: 1 }} mt={{ xs: 1, md: 3 }}>
        <Image
          width={580}
          height={350}
          src={img}
          alt={"description-img"}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default TextWithImageArea;
