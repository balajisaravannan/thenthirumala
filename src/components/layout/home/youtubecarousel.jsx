import { Link, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import VideoPopup from '../../utils/videoPopup';

const CustomizeYt = () => {
 const { t, i18n } = useTranslation();
 const curr_lang = i18n.language;
 const theme = useTheme();
 const isResponsive = useMediaQuery(theme.breakpoints.down(768));
 const [loading, setLoading] = useState(true);
 const [open, setOpen] = useState(false);
 const [title, setTitle] = useState("");
 const [videoSrc, setVideoSrc] = useState('');

 const settings = {
   dots: false,
   infinite: false,
   speed: 500,
   slidesToShow: 5,
   slidesToScroll: 5,
   initialSlide: 0, 
   arrows: false, 
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: false,
         dots: false,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
 
 const tnVideoUrl = [
   {path: 'https://www.youtube.com/embed/decLBBM8j6A?si=qm3xIuYae83XkNDa', name: 'Srivari Theppotsavam Vaibhavam 2024'},
   {path: 'https://www.youtube.com/embed/YQpuSjeEse0?si=7ALuuZElWNL4q6gl', name: 'Srivari Annual Vasanthotsavam 2024'},
   {path: 'https://www.youtube.com/embed/8yqxcJMno3I?si=oHpUSWWFVjjNdvsa', name: 'Then Tirumala Kaisika dwadasi ugra srinivasa purapadu'},
   {path: 'https://www.youtube.com/embed/R_r1-40wI3s?si=3CQLNeTn6nD89iGd', name: 'Navaratri Brahmotsavam Day 5 Garuda seva'},
   {path: 'https://www.youtube.com/embed/e0Yx0n6DjuY?si=kA-8NusFY7tZxnhU', name: 'Navaratri Brahmotsavam'},
   {path: 'https://www.youtube.com/embed/0UpkBRfh8B4?si=Z--p8naoVvr8ndFy', name: 'Then Thirumalai vikansachachariyar utsavam Day'},
 ];

 const handleOpen = (e, video) => {
   setOpen(true);
   setTitle(video.name);
   setVideoSrc(video.path);
 };

 useEffect(() => {
   const timeoutId = setTimeout(() => setLoading(false), 3000);
   return () => clearTimeout(timeoutId);
 }, []);

 return (
   <div className='w-full p-10 px-12 mt-12' style={{ background: 'linear-gradient(to Left, #795548, #3e2723)', maxWidth: '1200px', margin: 'auto' }}>
     <div className='flex items-center justify-between'>
       <Typography variant='h4' fontWeight={500} className='text-white'>
         {curr_lang === 'en' ? "Uthsavam and other Videos" : "உத்சவ கால வீடியோக்கள்"}
       </Typography>

       {!isResponsive && (
         <div className='flex items-center cursor-pointer' onClick={(e) => handleOpen(e, tnVideoUrl[0])}>
           <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
             <path width={54} height={54} fill="url(#pattern0_462_169)" d="M0 0H26V26H0V0z" />
             <defs>
               <pattern id="pattern0_462_169" patternContentUnits="objectBoundingBox" width={1} height={1}>
                 <use xlinkHref="#image0_462_169" transform="scale(.0039)" />
               </pattern>
               <image id="image0_462_169" width={256} height={256} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAATVklEQVR4Ae2dDdBcZXXH/wkhMZYQoUXSVknNKFWK6aAMiSSVViMg2tGWZkCnphYrtRUKVNogZcbQdGqMMphSC1GHBlv7EaR+oCkVUjuUD0NSWkBsShpRIXEqNmjzgSEmp/eE5yY373v37r77+dz7/N6Znd13d+/u3d8553eee3fvcyX+IAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAwNAImPR8k44Ll5NMmhMurzLp1eHyepMWFS7nmrR4zOUdJl1ccrnUpKV9vvhrlr3X28as01sL65yv/xmFz/Xywuc9PjCYMTT4vBEExhIwaaZJXoinmjQ/JPCbQ2K/MyT+laGgVpj0YZNWm/SXJq3Nkvt2k+406X6TNpm0xaStJn3TpB3hstsk49KWwZ4CM+fnHJ2nc30gcP5S4L4mxGGlSX8a4nNFiNevh/idY5LL1MU6N4vZbJNeMDYH+L+mBEyabNILs4Q4xaRfMOktJi0x6RKTrjbpQyFJ/s6kdVlx32PSIyZ9y6SnKci2BdlkaXn8XTIPmXR3EPlfm/SxglB81HOBST4Ce41JPoI5vqblUp/Vzgp3ukknm3SWSW5zH9KuMum2EKyvm/Rdkw5QxEkX8agE9Ww20tge5OGjv09nI4uPmvQ+ky7MRioLwqjy6PpU3ZDXNLPsVJN8u9cN+0cm+ZDuvlDYowos78umSj9zYL9J20y6NxPCzSZdlY1Azw+bm9OGXHKjfTuTXhyG5zeYtMGkvXRvunfCOfCjMILw/Um/adIrTJo02irt87v79lIoeh8mMVynu/azuzbxtZ4Mm7oLay2DYLO/zYb2+xI2fBMTlM80PIk/HnZk1+dr0mw7/mfCXncf3pAsMCAHes+B/zVpWdRfX5p0dDZkuZaOj/QQ/8BywEVwUZGNR5mvqR63P09kz/1yUJphMmgDmlhMmoVd9vK3fqk/SXJY1J/6mSef8Ykfe7+NLeZxDJpN1MW0WaVcXbhlFmmr1vF5CX6/D17ld81Sz6lW8nSS0z2ne0vnUPGTVfL0vnsW+hy83WPP63+zD4Nl12ayh/9Zkr8GnmnzPm3aaxHtKl/qUvJrBtWrXnvsWs3YlNm/k8nCSz2k5M2cCmtcljO++ddfUtDZ3VdpffHvNLy6/3JvZo32F7Nbpv8k5fzsbMu4v6fV3JD7e1Tyn3uHb/0OBSmcR9Nr+wZP97ewhy/X61eI/d/1mH+0JHP7E3X7nOVz0U3C4N9uP/L9HGv1x/8Pz4GVqH+29vgf5m2E+fmRsvr+qTGnThrczmTs7v3y+lwZMmtPaTz+P3eoOeYJP89LgPn1t3qxKbPdLiwtfFzK2z+iZx7YcAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAwH1ADn8GyWbsW4AAAAAElFTkSuQmCC" />
             </defs>
           </svg>

           <Typography variant='h6' className='text-white font-normal'>
             {curr_lang === 'en' ? "Live" : "நேரலை"}
           </Typography>
         </div>
       )}
     </div>

     <Slider {...settings} className='w-full'>
       {tnVideoUrl.map((video, index) => (
         <div key={index} className='pr-4'>
           {loading ? (
             <Skeleton animation="wave" variant="rectangular" width="100%" height={120} />
           ) : (
             <Link component="button" onClick={(e) => handleOpen(e, video)}>
               <iframe
                 width="100%"
                 height={isResponsive ? '180px' : '250px'}
                 src={video.path}
                 title={video.name}
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               ></iframe>
             </Link>
           )}
           <Typography variant='h6' fontWeight={600} className='pt-3 text-white'>
             {video.name}
           </Typography>
         </div>
       ))}
     </Slider>

     <VideoPopup open={open} setOpen={setOpen} videoSrc={videoSrc} title={title} />
   </div>
 );
};

export default CustomizeYt;
