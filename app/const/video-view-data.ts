export type VideoPageProps = {
  step: number;
  title: string;
  detail: string;
  img: string;
  overView: string[];
  href: string;
};

export const step1OverViewData: VideoPageProps = {
  step: 1,
  title: "Discordの使い方の動画を見よう！",
  detail:
    "Discordの使い方の説明です！！PeachTechにはたくさんのチャンネルがあります！その紹介などもしているのでDiscordを使ったことある人も全部見てください！！",
  img: "/discord-screenshot.png",
  overView: [
    "timesの説明について",
    "メンターについて",
    "もくもく部屋の紹介",
    "自己紹介",
  ],
  href: "/",
};
