import { Box } from "@mui/material";
import PageTitle from "./page-title";
import { TextWithImagePageProps } from "../const/text-with-image-page-data";
import TextWithImageArea from "./text-with-image-area";

const TextWithImagePage: React.FC<TextWithImagePageProps> = ({
  step,
  title,
  detail,
  explanation,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#fff7f7"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        p={{ xs: 3, md: 6 }}
      >
        <PageTitle step={step} title={title} detail={detail} />
        {explanation.map((data) => (
          <TextWithImageArea
            title={data.title}
            detail={data.detail}
            img={data.img}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TextWithImagePage;
