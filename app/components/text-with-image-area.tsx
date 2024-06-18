"use client";
import * as React from "react";
import { Box, Button, Modal, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { TextWithImageAreaProps } from "../types/types";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 600, md: 1000 },
};

const TextWithImageArea: React.FC<TextWithImageAreaProps> = ({
  title,
  detail,
  img,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isPC = useMediaQuery("(min-width:600px)");

  return (
    <Box px={1} mt={7} mb={{ xs: 10, md: 14 }}>
      <Typography fontWeight={"bold"} fontSize={{ xs: 15, md: 19 }}>
        {title}
      </Typography>
      <Typography fontSize={{ xs: 13, md: 16 }} mt={1}>
        {detail}
      </Typography>
      <Box mx={{ md: 1 }} mt={{ xs: 1, md: 3 }}>
        {isPC ? (
          <Button onClick={handleOpen}>
            <Image
              width={580}
              height={350}
              src={img}
              alt={"computer-screen-description-img"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Button>
        ) : (
          <Image
            width={580}
            height={350}
            src={img}
            alt={"smartphone-screen-description-img"}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        )}
        <Modal open={open} onClose={handleClose} sx={{ outline: "none" }}>
          <Box sx={{ ...modalStyle }}>
            <Image
              width={1000}
              height={350}
              src={img}
              alt={"expansion-description-img"}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default TextWithImageArea;
