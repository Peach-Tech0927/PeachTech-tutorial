import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#FFCDCD" }}>
      <Toolbar>
        <Image
          src="/peachtech.png"
          width={50}
          height={50}
          alt="peachtechのアイコン"
        />
        <Typography m={"0 auto"} color={"black"} fontSize={20} fontWeight={"bold"} letterSpacing={0.2}>PeachTechチュートリアル</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
