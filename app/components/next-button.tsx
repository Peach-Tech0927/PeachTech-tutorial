import { Box, Button, Typography } from "@mui/material";

export type nextButtonProps = {
  text: string;
  href: string;
};

const NextButton: React.FC<nextButtonProps> = ({ text, href }) => {
  return (
    <Button
      variant="contained"
      href={href}
      sx={{
        bgcolor: "#5f82ff",
        mr: { xs: 1, md: 3 },
        borderRadius: 2,
      }}
    >
      {text}
    </Button>
  );
};

export default NextButton;
