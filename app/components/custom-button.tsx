import { Button } from "@mui/material";

export type CustomButtonProps = {
  text: string;
  href: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, href }) => {
  return (
    <Button
      variant="contained"
      href={href}
      sx={{
        bgcolor: "#5f82ff",
        borderRadius: 2,
        px: 3,
        fontSize: 16,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
