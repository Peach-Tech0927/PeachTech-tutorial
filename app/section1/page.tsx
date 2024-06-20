import VideoPage from "../components/Templetes/video-page";
import { step1VideoPageData } from "../const/video-page-data";

const Page = () => {
  return (
    <VideoPage
      step={step1VideoPageData.step}
      title={step1VideoPageData.title}
      detail={step1VideoPageData.detail}
      img={step1VideoPageData.img}
      contents={step1VideoPageData.contents}
      href={step1VideoPageData.href}
      buttonText={step1VideoPageData.buttonText}
      nextButtonHref={step1VideoPageData.nextButtonHref}
    />
  );
};

export default Page;
