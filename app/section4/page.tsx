import VideoPage from "../components/Templetes/video-page";
import { step4VideoPageData } from "../const/video-page-data";

const Page = () => {
  return (
    <VideoPage
      step={step4VideoPageData.step}
      title={step4VideoPageData.title}
      detail={step4VideoPageData.detail}
      img={step4VideoPageData.img}
      contents={step4VideoPageData.contents}
      href={step4VideoPageData.href}
      buttonText={step4VideoPageData.buttonText}
      nextButtonHref={step4VideoPageData.nextButtonHref}
    />
  );
};

export default Page;
