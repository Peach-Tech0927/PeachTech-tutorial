import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#FFC8C9" }}>
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
          color={"#131313"}
          fontSize={{ xs: 15, md: 20 }}
          fontWeight={"bold"}
          fontFamily={"unset"}
          letterSpacing={0.2}
        >
          PeachTechチュートリアル
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
