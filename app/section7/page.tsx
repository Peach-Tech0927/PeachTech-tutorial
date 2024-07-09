import VideoPage from "../components/Templetes/video-page";
import { step7VideoPageData } from "../const/video-page-data";

const Page = () => {
  return (
    <VideoPage
      step={step7VideoPageData.step}
      title={step7VideoPageData.title}
      detail={step7VideoPageData.detail}
      img={step7VideoPageData.img}
      contents={step7VideoPageData.contents}
      href={step7VideoPageData.href}
      buttonText={step7VideoPageData.buttonText}
      nextButtonHref={step7VideoPageData.nextButtonHref}
      isNotWebTutorial={false}
    />
  );
};

export default Page;
