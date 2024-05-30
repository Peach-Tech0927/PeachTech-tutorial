export type VideoPageProps = {
  step: number;
  title: string;
  detail: string;
  img: string;
  overView: test[];
  href: string;
};

type test = {
  title: string;
  detail: string;
  img: string;
};

export const step5TextWithImagePageData: VideoPageProps = {
  step: 1,
  title: "Discordの使い方の動画を見よう！",
  detail:
    "Discordの使い方の説明です！！PeachTechにはたくさんのチャンネルがあります！その紹介などもしているのでDiscordを使ったことある人も全部見てください！！",
  img: "/discord-screenshot.png",
  overView: [
    {
      title: "1.自分のアイコンをクリック",
      detail: "以下の画像の画面で、左下にある自分のアイコンをクリック！",
      img: "/discord-screenshot.png",
    },
    {
      title: "2.オンラインを選択",
      detail:
        "以下の画像の印のところにカーソルを合わせると色々なオンラインステータスが表示されます。こちらでオンラインを選択してください🙌",
      img: "/discord-screenshot.png",
    },
    {
      title: "3.オンラインの確認",
      detail:
        "以下の画像の左側のサイドバーに、自分がオンラインで表示されているか確認してみてください！もしそのサイドバーが無い場合は、その上にある人型のアイコンをクリックすると現れます！",
      img: "/discord-screenshot.png",
    },
  ],
  href: "/",
};
