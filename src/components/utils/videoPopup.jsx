import { Cancel, Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import "./videoPopup.css";
const VideoPopup = ({ open, setOpen, title, videoSrc ,loading}) => {
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Dialog open={open} maxWidth="md" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: "bold", fontSize: 18 }}>
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <DialogContent dividers>
        {loading ? 
          <Skeleton
          variant="rectangular"
          width={240}
          height={130}
          sx={{ borderRadius: 1 }}
         />  : 
          <iframe
            src={`${videoSrc}?autoplay=1&mute=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: "100%", height: "60vh" }}
          />
          }
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoPopup;
