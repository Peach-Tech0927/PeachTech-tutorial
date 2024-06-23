import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#FFCDCD" }}>
      <Toolbar>
        <Link href="/">
          <Image
            src="/peachtech.png"
            width={50}
            height={50}
            alt="peachtechのアイコン"
          />
        </Link>
        <Typography
          m={{ sm: "0 auto" }}
          color={"black"}
          fontSize={{ xs: 15, md: 20 }}
          fontWeight={"bold"}
          letterSpacing={0.2}
        >
          PeachTechチュートリアル
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
