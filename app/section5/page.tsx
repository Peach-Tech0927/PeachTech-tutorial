import TextWithImagePage from "../components/Templetes/text-with-image-page";
import { step5TextWithImagePageData } from "../const/text-with-image-page-data";

const Page = () => {
  return (
    <TextWithImagePage
      step={step5TextWithImagePageData.step}
      title={step5TextWithImagePageData.title}
      detail={step5TextWithImagePageData.detail}
      textWithImageArea={step5TextWithImagePageData.textWithImageArea}
      buttonText={step5TextWithImagePageData.buttonText}
      nextButtonHref={step5TextWithImagePageData.nextButtonHref}
    />
  );
};

export default Page;
