import TextWithImagePage from "../components/text-with-image-page";
import { step5TextWithImagePageData } from "../const/text-with-image-page-data";

const Page = () => {
  return (
    <TextWithImagePage
      step={step5TextWithImagePageData.step}
      title={step5TextWithImagePageData.title}
      detail={step5TextWithImagePageData.detail}
      textWithImageArea={step5TextWithImagePageData.textWithImageArea}
    />
  );
};

export default Page;
