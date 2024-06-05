import { Box } from "@mui/material";
import { TextWithImagePageProps } from "../const/text-with-image-page-data";
import TextWithImageArea from "./text-with-image-area";
import PageContents from "./page-contents";
import CustomButton from "./custom-button";
import TopButton from "./top-button";

const TextWithImagePage: React.FC<TextWithImagePageProps> = ({
  step,
  title,
  detail,
  textWithImageArea,
  buttonText,
  nextButtonHref,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#fff7f7"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        p={{ xs: 3, md: 6 }}
      >
        <PageContents step={step} title={title} detail={detail} />
        {textWithImageArea.map((data) => (
          <TextWithImageArea
            title={data.title}
            detail={data.detail}
            img={data.img}
          />
        ))}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <TopButton />
          <CustomButton text={buttonText} href={nextButtonHref} />
        </Box>
      </Box>
    </Box>
  );
};

export default TextWithImagePage;
