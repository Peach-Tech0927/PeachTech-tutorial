import TextWithImagePage from "../components/Templetes/text-with-image-page";
import { step6TextWithImagePageData } from "../const/text-with-image-page-data";

const Page = () => {
  return (
    <TextWithImagePage
      step={step6TextWithImagePageData.step}
      title={step6TextWithImagePageData.title}
      detail={step6TextWithImagePageData.detail}
      textWithImageArea={step6TextWithImagePageData.textWithImageArea}
      buttonText={step6TextWithImagePageData.buttonText}
      nextButtonHref={step6TextWithImagePageData.nextButtonHref}
    />
  );
};

export default Page;
