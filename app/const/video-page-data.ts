import { VideoPageProps } from "../types/types";

export const step1VideoPageData: VideoPageProps = {
  step: 1,
  title: "Discordの使い方の動画を見よう！",
  detail:
    "この動画ではDiscordの使い方を説明しています！PeachTechのDiscordにはたくさんのチャンネルがあるので、その紹介をしています！",
  img: "/video-thumbnail-1.jpeg",
  contents: ["timesの使い方について", "ロールの設定方法", "もくもく部屋の紹介"],
  href: "https://drive.google.com/file/d/1kSbj_EJGxP-V31UVByCm_yC0LDtyIfsR/view",
  buttonText: "次へ",
  nextButtonHref: "/section2",
};

export const step2VideoPageData: VideoPageProps = {
  step: 2,
  title: "メンバーズサイトについての動画を見よう！",
  detail:
    "この動画ではPeachTechにどんな人がいるか分かる「メンバーズサイト」の紹介をしています！アクセス方法やデータの入力方法を説明しているので、実際にアクセスしたりデータを送ってみてください！",
  img: "/video-thumbnail-2.jpeg",
  contents: [
    "メンバーズサイトについて",
    "サイトへのアクセス方法",
    "サイトに載せるデータの入力",
  ],
  href: "https://drive.google.com/file/d/1TIHnfOD_sWoxaCMMEPHeat1q4yZUyAdt/view",
  buttonText: "次へ",
  nextButtonHref: "/section3",
};

export const step3VideoPageData: VideoPageProps = {
  step: 3,
  title: "TechTrainの紹介の動画を見よう！",
  detail:
    "この動画ではPeachTechがアンバサダー提携をしている「TechTrain」というプログラミング学習サービスの紹介をしています！登録するかどうかを考えながら見てみてください！",
  img: "/video-thumbnail-3.jpeg",
  contents: ["TechTrainの紹介", "機能の説明"],
  href: "https://drive.google.com/file/d/1qOxpUXzHMAb1dzZvzdf2ON7ZEYqkfUGG/view",
  buttonText: "次へ",
  nextButtonHref: "/section4",
};

export const step4VideoPageData: VideoPageProps = {
  step: 4,
  title: "Discordの色々な設定の動画を見よう！",
  detail:
    "この動画ではDiscordで円滑にコミュニケーションを取るための設定などをしてもらいます！どれも簡単にできることなので動画を見ている間にやってみてください！",
  img: "/video-thumbnail-4.jpeg",
  contents: [
    "質問はメンション",
    "timesの通知をオンにしてね",
    "DiscordをスマホとPCに入れる",
  ],
  href: "https://drive.google.com/file/d/1Z99lrCGUbnRbPz1R1Wd_s2xoK1_nOKxL/view",
  buttonText: "次へ",
  nextButtonHref: "/section5",
};

export const step7VideoPageData: VideoPageProps = {
  step: 7,
  title: "Webチュートリアルについての動画を見よう！",
  detail:
    "この動画では実際にWebサイトやWebアプリが作れるようになる、Webプログラミングのチュートリアルについて紹介しています！代表のゆせさんが作成したチュートリアルで、プログラミングの正しい勉強方法やマインドについても学べるものとなっています！",
  img: "/video-thumbnail-4.jpeg",
  contents: [
    "Webチュートリアルで学べること",
    "具体的なチュートリアル内容",
    "始め方と取り組み方",
  ],
  href: "https://drive.google.com/file/d/1Z99lrCGUbnRbPz1R1Wd_s2xoK1_nOKxL/view",
  buttonText: "完了！",
  nextButtonHref: "/closing",
};
