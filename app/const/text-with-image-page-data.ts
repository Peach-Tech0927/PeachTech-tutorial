export type TextWithImagePageProps = {
  step: number;
  title: string;
  detail: string;
  textWithImageArea: TextWithImageAreaProps[];
  buttonText: string;
  nextButtonHref: string;
};

export type TextWithImageAreaProps = {
  title: string;
  detail: string;
  img: string;
};

export const step5TextWithImagePageData: TextWithImagePageProps = {
  step: 5,
  title: "Discordでオンラインが表示されるようにしよう！",
  detail:
    "Discordでは誰が今オンラインになっているかが分かります！自分がdiscordを開いた時にオンラインのマークが出るように設定します！",
  textWithImageArea: [
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
  buttonText: "完了！",
  nextButtonHref: "/final",
};
