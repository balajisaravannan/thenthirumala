import React, { useState } from "react";
import "./eventlist.css";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import ImageGallery from "../../../utils/imageGallery";

const EventList = ({ data,setOpenDialog , setSelectedImages ,setDialogTitle,openDialog,selectedImages,dialogTitle }) => {
const theme = useTheme()
const isMobile = useMediaQuery(theme.breakpoints.down(768))  


const handleOpenDialog = (images, title) => {
  console.log('Images:', images);
  if (images && images.length > 0) {
    setSelectedImages(images);
  } else {
    setSelectedImages([]);  // Explicitly set empty if no images
  }
  setDialogTitle(title);
  setOpenDialog(true);
};

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className='uthsavams_event_container'>
      <div className='flex flex-wrap'>
        {data.map((item, idx) => (
          <div className={isMobile ? 'w-full' :'w-1/2 px-10 p-10'}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Typography
                  fontWeight={600}
                  sx={{
                    background:
                      "linear-gradient(90deg, #052DFF 17.07%, #FA1414 85.78%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  variant='h5'
                >
                  {" "}
                  {item.title}{" "}
                </Typography>
                <Typography fontSize={12} fontWeight={400} color={"#000000"}>
                  {item.subtitle}
                </Typography>
              </div>
              <Button
                 onClick={() => handleOpenDialog(item.images, item.title)}
                size='small'
                sx={{
                  background:
                    "linear-gradient(90deg, #E4B614 0%, #BD219B 100%), linear-gradient(180deg, #E6C44B 0%, #BE229B 98.61%)",
                  color: "white",
                  px: 1,
                  py: 0.4,
                  borderRadius: "10px",
                  fontSize: 12,
                }}
              >
                படங்கள்
              </Button>
            </div>
            <Typography
                fontSize={12}
                fontWeight={400}
                color={"#000000"}
                mt={2}
                lineHeight={1.3}
                // sx={{
                //   height: 94,
                //   overflow: "hidden",
                //   textOverflow: "ellipsis",
                //   display: "-webkit-box",
                //   WebkitLineClamp: 6,
                //   WebkitBoxOrient: "vertical",
                // }}
              >
              {item.content}
              </Typography>  
          </div>
        ))}
        <ImageGallery
          open={openDialog}
          onClose={handleCloseDialog}
          images={selectedImages}
          title={dialogTitle}
        />
      </div>
    </div>
  );
};

export default EventList;
