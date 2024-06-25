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
        px: { xs: 1, md: 3 },
        fontSize: { xs: 12, md: 16 },
        "&:hover": {
          background: "#4469EA",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
