import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { TextWithImageAreaProps } from "../const/text-with-image-data";

const TextWithImageArea: React.FC<TextWithImageAreaProps> = ({
  title,
  detail,
  img,
}) => {
  return (
    <Box px={1} mt={7} mb={14}>
      <Typography fontWeight={"bold"} fontSize={{ xs: 14, md: 19 }}>
        {title}
      </Typography>
      <Typography fontSize={{ xs: 14, md: 16 }} mt={1}>
        {detail}
      </Typography>
      <Box mx={1} mt={3}>
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
