import React from "react";
import VideoView from "../components/video-view";
import { step1OverViewData } from "../const/video-view-data";

const Page = () => {
  return (
    <VideoView
      step={step1OverViewData.step}
      title={step1OverViewData.title}
      detail={step1OverViewData.detail}
      img={step1OverViewData.img}
      overView={step1OverViewData.overView}
    />
  );
};

export default Page;
