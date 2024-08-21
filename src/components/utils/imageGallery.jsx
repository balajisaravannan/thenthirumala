import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageGallery = ({ open, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        {images.length > 0 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                borderRadius: '50%',
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <img
              src={images[currentIndex].image}
              alt={`Gallery image ${currentIndex + 1}`}
              style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '16px' }}
            />
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                borderRadius: '50%',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </>
        )}
        {(!images || images.length === 0) && <Typography>No images available</Typography>}
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
