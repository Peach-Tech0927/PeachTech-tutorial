import VideoPage from "../components/Templetes/video-page";
import { step2VideoPageData } from "../const/video-page-data";

const Page = () => {
  return (
    <VideoPage
      step={step2VideoPageData.step}
      title={step2VideoPageData.title}
      detail={step2VideoPageData.detail}
      img={step2VideoPageData.img}
      contents={step2VideoPageData.contents}
      href={step2VideoPageData.href}
      buttonText={step2VideoPageData.buttonText}
      nextButtonHref={step2VideoPageData.nextButtonHref}
    />
  );
};

export default Page;
