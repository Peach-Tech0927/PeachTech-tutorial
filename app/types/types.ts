export type CardDataProps = {
  title: string;
  imageSrc: string;
  number: string;
  href: string;
};

export type TextWithImagePageProps = {
  step: number;
  title: string;
  detail: string;
  textWithImageArea: TextWithImageAreaProps[];
  buttonText: string;
  nextButtonHref: string;
  isNotWebTutorial?: boolean;
};

export type TextWithImageAreaProps = {
  title: string;
  detail: string;
  img: string;
};

export type VideoPageProps = {
  step: number;
  title: string;
  detail: string;
  img: string;
  contents: string[];
  href: string;
  buttonText: string;
  nextButtonHref: string;
  isNotWebTutorial?: boolean;
};
