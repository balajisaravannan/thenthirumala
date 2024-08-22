import React, { useState } from 'react';
import Slider from 'react-slick';
import { Avatar, Grid, IconButton, Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { styled, useMediaQuery, useTheme } from '@mui/material';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import One from '../../../assets/images/png/home/1.jfif';
import Two from '../../../assets/images/png/home/2.jfif';
import Three from '../../../assets/images/png/home/3.jfif';
import Five from '../../../assets/images/png/home/5.jfif';
import forwardArrow from "../../../assets/images/svg/btn-forward.svg";
import backwardArrow from "../../../assets/images/svg/btn-backword.svg";

const swipperData = [
  { slide: One },
  { slide: Two },
  { slide: Three },
  { slide: Two },
  { slide: Five },
  { slide: One },
  { slide: Two },
  { slide: Three },
  { slide: Two },
  { slide: Five }
];

const Container = styled(Grid)({
  position: "relative",
  padding: "3px", 
});

const Content = styled(Grid)({
  borderRadius: "8px",
  background: 'linear-gradient(301.4deg, #BD219B 12.01%, #E3B614 91.99%)'
});

const CustomArrow = ({ className, style, onClick, imgSrc }) => (
  <IconButton
    onClick={onClick}
    className={className}
    style={{
      ...style,
      display: 'block',
      position: 'absolute',
      top: '15%',
      zIndex: 1,
      backgroundColor: 'transparent',
      padding: 0,
    }}
  >
    <img src={imgSrc} style={{ width: '44px', height: '44px' }} />
  </IconButton>
);

const CustomizeSlider = () => {
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down('768'));
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2200,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <CustomArrow imgSrc={forwardArrow} altText="Next" />,
    prevArrow: <CustomArrow imgSrc={backwardArrow} altText="Previous" />,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container relative px-14 cursor-pointer bg-white" style={{marginBlockEnd:'35px', maxWidth:' 1200px',margin: 'auto',paddingBlockEnd:"30px"}}>
      <Slider {...settings}>
        {swipperData.map((item, idx) => (
          <div key={idx} className={isResponsive ? 'px-6' : 'px-12'}>
            <Content>
              <Container>
                <Avatar
                  variant='square'
                  src={item?.slide}
                  style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
                  alt='slide'
                  onClick={() => handleClickOpen(item?.slide)}
                />
              </Container>
            </Content>
          </div>
        ))}
      </Slider>

      {/* Modal for Zoomed Image */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth 
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgb(0 0 0 / 78%)', // Custom backdrop color
          },
        }}
      >
        <DialogContent
          sx={{
            backgroundColor:"#000",padding:"0px",
            position: 'relative', // Make DialogContent relative to position the close icon
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              color: 'white', // Adjust color to fit your design
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomizeSlider;
