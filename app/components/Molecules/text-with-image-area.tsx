"use client";
import { useState } from "react";
import { Box, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TextWithImageAreaProps } from "../../types/types";
import CustomTextWithImage from "../Atoms/custom-text-with-image";

const TextWithImageArea: React.FC<TextWithImageAreaProps> = ({
  title,
  detail,
  img,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isPCScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box px={1} mt={7} mb={{ xs: 10, md: 14 }}>
      <Typography fontWeight={"bold"} fontSize={{ xs: 15, md: 19 }}>
        {title}
      </Typography>
      <Typography fontSize={{ xs: 13, md: 16 }} mt={1}>
        {detail}
      </Typography>
      <Box mx={{ md: 1 }} mt={{ xs: 1, md: 3 }}>
        {isPCScreen ? (
          <CustomTextWithImage src={img} onOpen={handleOpen} />
        ) : (
          <CustomTextWithImage src={img} />
        )}
        <Modal open={open} onClose={handleClose}>
          <Box
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            width={{ xs: 600, md: 1200 }} //下のCustomTextWithImageのwidthと同じ大きさに指定する
            sx={{ transform: "translate(-50%, -50%)", outline: "none" }}
          >
            <CustomTextWithImage width={1200} src={img} />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default TextWithImageArea;
