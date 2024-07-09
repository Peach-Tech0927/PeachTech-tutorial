import { Box } from "@mui/material";
import TextWithImageArea from "../Organisms/text-with-image-area";
import PageContentArea from "../Organisms/page-content-area";
import CustomButton from "../Atoms/custom-button";
import TopButton from "../Atoms/top-button";
import { TextWithImagePageProps } from "../../types/types";

const TextWithImagePage: React.FC<TextWithImagePageProps> = ({
  step,
  title,
  detail,
  textWithImageArea,
  buttonText,
  nextButtonHref,
  isNotWebTutorial = true,
}) => {
  return (
    <Box px={{ xs: 2, md: 35 }} py={{ xs: 1.5, md: 5 }} bgcolor={"#FCEBEB"}>
      <Box
        bgcolor={"white"}
        boxShadow={"0.5px 1px 5px -2px gray"}
        borderRadius={1}
        p={{ xs: 3, md: 6 }}
      >
        <PageContentArea
          step={step}
          title={title}
          detail={detail}
          isNotWebTutorial={isNotWebTutorial}
        />
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
