import { Box } from "@mui/material";

export type decorantionBerProps = {
  transform: string;
};

const DecorationBar: React.FC<decorantionBerProps> = ({ transform }) => {
  return (
    <Box
      mx={1}
      width={4}
      height={28}
      bgcolor="#ffe179"
      mb={1}
      sx={{ transform: transform }}
    ></Box>
  );
};

export default DecorationBar;
