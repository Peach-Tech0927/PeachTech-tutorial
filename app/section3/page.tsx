import VideoPage from "../components/Templetes/video-page";
import { step3VideoPageData } from "../const/video-page-data";

const Page = () => {
  return (
    <VideoPage
      step={step3VideoPageData.step}
      title={step3VideoPageData.title}
      detail={step3VideoPageData.detail}
      img={step3VideoPageData.img}
      contents={step3VideoPageData.contents}
      href={step3VideoPageData.href}
      buttonText={step3VideoPageData.buttonText}
      nextButtonHref={step3VideoPageData.nextButtonHref}
    />
  );
};

export default Page;
