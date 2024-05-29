import { Box } from "@mui/material";

export type decorantionBerProps = {
  transform: string;
  marginl: any;
};

const DecorationBar: React.FC<decorantionBerProps> = ({
  transform,
  marginl,
}) => {
  return (
    <Box
      ml={marginl}
      width={4}
      height={28}
      bgcolor="#ffe179"
      mb={1}
      sx={{ transform }}
    ></Box>
  );
};

export default DecorationBar;
