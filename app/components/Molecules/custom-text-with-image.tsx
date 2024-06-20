import Image from "next/image";

type TProps = {
  width?: number;
  src: string;
  onOpen?: () => void;
};

const CustomTextWithImage: React.FC<TProps> = ({
  width = 580,
  src,
  onOpen,
}) => {
  return (
    <Image
      width={width}
      height={350}
      src={src}
      alt={"text-with-imageの画像"}
      onClick={onOpen}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
};

export default CustomTextWithImage;
