import VideoPage from "../components/video-page";
import { step1VideoPageData } from "../const/video-page-data";

const Page = () => {
  return (
    <VideoPage
      step={step1VideoPageData.step}
      title={step1VideoPageData.title}
      detail={step1VideoPageData.detail}
      img={step1VideoPageData.img}
      overView={step1VideoPageData.overView}
      href={step1VideoPageData.href}
    />
  );
};

export default Page;
