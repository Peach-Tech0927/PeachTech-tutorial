import { TextWithImagePageProps } from "../types/types";

export const step5TextWithImagePageData: TextWithImagePageProps = {
  step: 5,
  title: "Discordをオンラインにしよう！",
  detail:
    "Discordでは誰がオンラインになっているかが分かります！このStepでは自分がDiscordを開いた時にオンラインのマークが出るように設定してほしいです！その表示をすることでメンバーが話しかけやすくなったり、認知されやすくなります！！",
  textWithImageArea: [
    {
      title: "1. オンラインのメンバーリストを表示",
      detail:
        "Discordでは以下の画像のように右サイドバーにメンバーリストが表示され、オンラインかどうかが分かります！このサイドバーがない人は、以下の画像で示している右上の赤い印をクリックすると表示されます！この時点で自分が緑色のオンラインマーク付きで表示されている場合は、次のStep6へ進んで大丈夫です！",
      img: "/text-with-image-5-1.jpeg",
    },
    {
      title: "2. ステータスをオンラインにする",
      detail:
        "以下の画像で示している、自分のアイコンをクリック！その時に表示されるところで以下の画像のように「オンライン」を選択してください！右のサイドバーで自分が緑色のオンラインマークで表示されていれば大丈夫です！！",
      img: "/text-with-image-5-2.jpeg",
    },
  ],
  buttonText: "次へ",
  nextButtonHref: "/section6",
};

export const step6TextWithImagePageData: TextWithImagePageProps = {
  step: 6,
  title: "Discordで話すときはメンションか返信をしよう！",
  detail:
    "Discordで会話をするときは必ずメンションか返信機能を使ってほしいです！そうすることで相手に通知がいきます！メンションや返信機能を使わないと通知がいかないのでメッセージに気づいてもらえないかもしれません！またStep4でもあったように、質問するときもぜひメンションをしてみてください！🙌 ",
  textWithImageArea: [
    {
      title: "1. メンションの仕方",
      detail:
        "半角の「@」を入力してメンションをしたいメンバーの名前を入力するとメンションができます！そのメンションの文字が青色になっていればOKです！！",
      img: "/text-with-image-6-1.jpeg",
    },
    {
      title: "2. 返信の仕方",
      detail:
        "返信をしたい人のメッセージにカーソルを当てると、以下の画像のように曲がった矢印マークが出てくるのでそれをクリックします！そのままメッセージを入力して送信すると、相手に通知が届いて返信ができます！また返信をしたい人のメッセージを右クリックしても「返信」が出てきます！",
      img: "/text-with-image-6-2.jpeg",
    },
  ],
  buttonText: "完了！",
  nextButtonHref: "/closing",
};
