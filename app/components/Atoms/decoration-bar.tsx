import { Box } from "@mui/material";

type TProps = {
  transform: string;
};

const DecorationBar: React.FC<TProps> = ({ transform }) => {
  return (
    <Box
      mx={1}
      width={4}
      height={28}
      bgcolor="#ffe179"
      mb={1}
      sx={{ transform: transform }}
    />
  );
};

export default DecorationBar;
