import { Link, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Import slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import VideoPopup from '../../utils/videoPopup';

const CustomizeYt = () => {
 const {t, i18n} = useTranslation() 
 const curr_lang = i18n.language 
 const theme = useTheme()
 const isResponsive = useMediaQuery(theme.breakpoints.down(768))
 const [loading, setLoading] = useState(true);
 const [open , setOpen] = useState(false)
 const [title, setTitle] = useState("");
 const [videoSrc , setVideoSrc] = useState('')
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
 
 const tnVideoUrl = [
  {path : 'https://www.youtube.com/embed/decLBBM8j6A?si=qm3xIuYae83XkNDa', name:'Srivari Theppotsavam Vaibhavam 2024'},
  {path : 'https://www.youtube.com/embed/YQpuSjeEse0?si=7ALuuZElWNL4q6gl', name:'Srivari Annual Vasanthotsavam 2024'},
  {path : 'https://www.youtube.com/embed/8yqxcJMno3I?si=oHpUSWWFVjjNdvsa', name:'Then Tirumala Kaisika dwadasi ugra srinivasa purapadu'},
  {path : 'https://www.youtube.com/embed/R_r1-40wI3s?si=3CQLNeTn6nD89iGd', name:'Navaratri Brahmotsavam Day 5 Garuda seva'},
  {path : 'https://www.youtube.com/embed/e0Yx0n6DjuY?si=kA-8NusFY7tZxnhU', name:'Navaratri Brahmotsavam '},
  {path : 'https://www.youtube.com/embed/0UpkBRfh8B4?si=Z--p8naoVvr8ndFy', name:'Then Thirumalai vikansachachariyar utsavam Day'},
  ]
const handleOpen = (e , video) => {
console.log(e , video)
setOpen(true)
setTitle(video.name)
setVideoSrc(video.path)
}
  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeoutId);
  }, []);
console.log(videoSrc)
  return (
    <div className='w-full p-10 px-12 mt-12' style={{ background: 'linear-gradient(to Left, #795548, #3e2723)',maxWidth:' 1200px',margin: 'auto'}}>
     <div className='flex items-center justify-between '>
     <Typography variant='h4' fontWeight={500} className='text-white'>{curr_lang == 'en' ? "Uthsavam and other Videos" : "உத்சவ கால வீடியோக்கள்"}</Typography>
    
      {!isResponsive && <div className='flex items-center cursor-pointer'>
      <svg
     width={26}
     height={26}
     viewBox="0 0 26 26"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      width={54}
      height={54}
      fill="url(#pattern0_462_169)"
      d="M0 0H26V26H0V0z"
    />
    <defs>
      <pattern
        id="pattern0_462_169"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_462_169" transform="scale(.0039)" />
      </pattern>
      <image
        id="image0_462_169"
        width={256}
        height={256}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAATVklEQVR4Ae2dDdBcZXXH/wkhMZYQoUXSVknNKFWK6aAMiSSVViMg2tGWZkCnphYrtRUKVNogZcbQdGqMMphSC1GHBlv7EaR+oCkVUjuUD0NSWkBsShpRIXEqNmjzgSEmp/eE5yY373v37r77+dz7/N6Znd13d+/u3d8553eee3fvcyX+IAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAwNAImPR8k44Ll5NMmhMurzLp1eHyepMWFS7nmrR4zOUdJl1ccrnUpKV9vvhrlr3X28as01sL65yv/xmFz/Xywuc9PjCYMTT4vBEExhIwaaZJXoinmjQ/JPCbQ2K/MyT+laGgVpj0YZNWm/SXJq3Nkvt2k+406X6TNpm0xaStJn3TpB3hstsk49KWwZ4CM+fnHJ2nc30gcP5S4L4mxGGlSX8a4nNFiNevh/idY5LL1MU6N4vZbJNeMDYH+L+mBEyabNILs4Q4xaRfMOktJi0x6RKTrjbpQyFJ/s6kdVlx32PSIyZ9y6SnKci2BdlkaXn8XTIPmXR3EPlfm/SxglB81HOBST4Ce41JPoI5vqblUp/Vzgp3ukknm3SWSW5zH9KuMum2EKyvm/Rdkw5QxEkX8agE9Ww20tge5OGjv09nI4uPmvQ+ky7MRioLwqjy6PpU3ZDXNLPsVJN8u9cN+0cm+ZDuvlDYowos78umSj9zYL9J20y6NxPCzSZdlY1Azw+bm9OGXHKjfTuTXhyG5zeYtMGkvXRvunfCOfCjMILw/Um/adIrTJo02irt87v79lIoeh8mMVynu/azuzbxtZ4Mm7oLay2DYLO/zYb2+xI2fBMTlM80PIk/HnZk1+dr0mw7/mfCXncf3pAsMCAHes+B/zVpWdRfX5p0dDZkuZaOj/QQ/8BywEVwUZ+30nt/ufAdvP9QA9vDgBwYfA7cYdKLeq/cPryCSb+dfUf/DMWP/MiBoeaA/8L0/D6UcHcv4Xsow3YJxh+88WEM47Ic8G/VlnVXwT0sZdIUkz6O8Ydq/LIE4D7E4DnwCa/JHkq680XDb+9vpfgpfnIgqhzwYxgG/yOi7Mi56wl8VIFnFMAoIM+BD3Xeyrt4pkm/Q/FT/ORA1DlwaRel3X6R7CCds03yAxty23ANC3IgvhzwH+Atal/RE3hGmDDDj58n4DAgB+LPAT+e4LgJlHj1U8PMNwQ+/sATI2KU58Anq6u6w0ezaZjOo/Mz8iEHapkDb+ywzMufFr7ye5jg1zL4eSfgOt1RwaNew+XV3cG9YWojEijdBCL29Y/94g5KffxT6P50fUZ+jciBr3U1CgjzltEB6t8BiCExfOv4Ft/mHpM+TwdoRAdAAAjgtjblfuTDJh3LIb4UPw2gMTngh+vPPLLKK/7LTpbgZ8Ohc8CAHGhODiypKPkjHwpnSCH4zQk+sSSWtx9Z5S3+M+kok77PCIAREDnQqBz4gdd2i7I/fHe28+80At+owNP96f55Dpx2uNJb3DLJTwOdL8A1LMiB5uTAZS3K/vDd2Qk5/wYBIEByoJE5cOvhSm9xK/v572aC38jg08mb08m7jeXWFmX/3N3hlNyc0YdE6TbBWC7u3PFZhFvPE2DSPLo/3Z8caHQOnNVyFJCdx/zdBL/RwadDx92hhxGfy6sEcB0CQADkQKNz4KYqAXyO4Dc6+MPoMLxH3KOMu6oEwOw/cQeP4iI+vebA41UC2MkIgBEAOdDoHPBv+aaOk4BJswh8owPfa+dg+eaMPk4uE8CZCAABkANJ5MD42YJNegfBTyL4dPLmdPJuY3lJ2QjgAwgAAZADSeTA9WUCuIXgJxH8brsGyzVn5PCFMgHcjQAQADmQRA48WiaArQQ/ieDTyZvTybuN5dNlAtiFABAAOZBMDjzvkARMmkHgkwl8t12D5Zo1cphdFMBLEQACIAeSyoEzigJYSPAjC/7MmXTcZnXc2OL5y0UBnI8AIhPA8uVmt99uNmdObInD+jRDTO8uCuC9CCBCAZiZ7d1rtmqV2bHHUnjNKLxY4nhNUQB/jAAiFYBLwP+2bze7+GKzyZNjSSDWo95CuqEogNUIIHIBBA/Ypk1mCxdSfPUuvhjid3iKcJM+iwBqIgAXwYEDZmvXms2eHUMisQ71lNHdxRHAvyKAGgkgHw3s3m22YoXZMcdQhPUswlHG7fDPgU16BAHUUAC5CJ54wmzJErNJk0aZULx3vSS0rTgCeAIB1FgAuQg2bDCbP59CrFchjipeu4oCYC7A2JLGfwfQzd/+/Waf+pTZrFmjSizeN7Zcar0+U2XSFJP8lEEELiYG3Qogl8auXWbLlplNm0ZcY4prXOtyggvgJyj+COXXqwByEWzZYrZ4MRKIq/BiicfLXAAcCBRjcvRLALkI1q83mzs3lsRjPeLIudNdAKczAmjwCCAXgF/v22e2erXZCSdQgHEU4KjjsMgFsAgBJCKAXAY7dpgtXWo2deqoE5D3H62Ifs0F8KsIIDEB5CLYvNnsTW+iCEdbhKPk/1sugN9AAIkKIBfBnXeanXLKKBOR9x6NhC53AfwuAkhcAC6CZ5997rBjJiJJSUZXuwD+AAEggHwwYN/7ntlll5kddVRKhZDqZ13uAliGABDAIQHkNx580Oy1r021MFL53Ne5AFYiAASQ1/24a5+W7CUvSaUgUvucN7oAPoYAEMC4wi/ekU9LNmNGagXS9M+7xgWwBgEggGK9t7y9bRvTko1mb/2gRLTWBXArAkAALYu+7IGNG80WLBhUUvK6w5PMF10AX0IACKCszivvY1qyJojqKy6A9QgAAVQWe9WDPi2ZH3Y8fXoTCiK1z3C/C+AeBIAAqmq8o8eYlqyO8tjkAtiIABBAR0XeyZO++lWzefPqWAwprvPDLoCHEQAC6KS2O35OPi3ZiSemWFR1+sybXQCbEQAC6Li4J/LEnTuZlmx4e/S7Ec83XACPIwAEMJG6nvBzH3uMacniFMGTLoBtCAABTLiou1ngrrvMXvnKbjoVywxGIE+5AL6LABBAN/Xc1TJMSxaTzH7gAngaASCAroq5l4V8WjI/7HjKlJgKIrV12ekC+D8EgAB6qeWelvVpyc47L7XCi+Xz7nYB7EYACKCnIu7HwkxLNgopPOMC+CECQAD9qOGeX4NpyYYtgb0ugH0IAAH0XLz9fAGmJRuWCPa5ADgv4GC+YuktiP0+M1A/C3RYr8W0ZL3lUPu83o8A2kMadBDKXx8BmPkvCd//frPJk8sZxRq7+qzXARfAj9gEYBNgWE29o/fJ5xo46SQKf7AyObgJsBcBIICOCnMYT3rgAbMzz6TwB1v4Od8f+ghgDwJAAMOo7cr3YL7BvCiHeX3wdwA7EQACqCzOQT64Z4/ZihVmzDg8zMLP34ufAkcrvxR2AnLOgbwQR3W9wzcBnoq2CIazHTQq+NXv22QB8PVedeyHl/cHjwbcjgDYBBjkKP/Qa/MDn1gKP1+P7T4C+BYCQACHinQQN/iJb15wsV1/0wXwGAJAAIOo+4OvyUE+sRV9cX3+ywXwCAJAAH0XAIf5Fgst1tsHZwX+NwSAAPomACb6iLXYy9Zro48A7kMACKBnATDVV1mBxX7fPS6Af0EACKAnATDZZ+yF3mr91rsA7kAACKArATDdd6vCqsv961wA/4AAEMCEBMAJP+pS4O3W81YXwF8hAATQkQA45Ve7gqrb47e4AG5CAAigrQA46WfdiruT9f0LF8B1CAABtBQAp/3upJDq+pyPuACWIwAEME4Au3c/d2LP6dPrmtysd/uDiq51AVyFABDAIQHk03HNnk0BtS+gujNa6gK4FAEggIMC2LjRbMGCuic169+5uC5xAbwLASQuAKbjSlUaF7kALkAAiQpg716zVauYjqvzjtk0UVzgAjgXASQoAKbjaloxd/N5znEBzEcACQmA6bi6KZSmLjPPBfByBJCAAJiOq6lF3Mvn+lkXwCwE0GABMB1XLwXS9GVPdAFMQwANFQDTcTW9gHv9fNPkfyY9gwQik0Av04IzHVevhZHC8nsOFn8QwHcQQAME4NNxLV1qNnVqCgnMZ+zt68ttRQH8JwKosQCYjgsZTFwGjxYFcD8CqKkA1q83mzuXAph4AaTO7N6iANYhgJoJYMsWs8WLU09iPn/34ltXFMAaBFATAeza9dxhutOmkfzdJz/spJuLAliBACIXQD4d16xZJC+F348c+GBRAFcggIgFsGGD2fz5/Qg6r4E88hy4vCiAtyOACAXAdFx5snLdf3FdWBTA6xBAZALwPftMx0Xh97/wc6a/VBTAzyGAyAQwuMDnCcB12oxfURTAjyMABEAOJJUDxxcFMMmkvSRAUgnACCDdEYDX+qRDAvAbJj2JABAAOZBEDnz7iOIPAthE8JMIPp0/3c6fx35TmQA+gwAQADmQRA7cViaAlQQ/ieDnXYDrdEcCK8sE8B4EgADIgSRy4D1lAngDwU8i+HT+dDt/Hvs3lAlgDgJAAORAEjkwp0wAU0x6lgRIIgHyTsB1eqOBfSYdPU4AfodJWxEAAiAHGp0DW0uLPwjgywS/0cGn46fX8cfG/MtVArgRASAAcqDROXBjlQB+n+A3OvhjuwH/pzciuLJKAK9HAAiAHGh0Doz/CjA3gkkcFpxeR2AUkFbMT8zrvfSaowIbbX+KPa1iHxvv75QWffFOk77IEBAJkAONzIE7irVeetukawh+I4M/thvwf3qjgWtLi754p0m/iAAQADnQyBw4u1jrpbdNms70YI0MPh0/vY5fjPl+k2aWFv3YO026lw6ABMiBRuXAQ2PrvOX/Jl1J8BsV/GIn4HaaI4E/aVnwYx8w6cUmHUACSIAcaEwOnDq2ziv/ZzOgMYGn46fZ8Ytx/3plsZc9aNIl2B8JkAONyIFrymq88j6Tfsyk/yEBGpEAxW7A7bRGBM+Y9JOVxd7qQZOWIgAEQA7UOgeua1Xfbe9nFFDrwNPp0+r0ZfH27v9TbQu96gkmXU4HQATkQC1z4CNVtd3RYyZNNuluEqCWCVDWFbgvjZHBN0w6pqMib/ckk3zK8J1IAAmQA7XIAf/Z71nt6npCj5t0GcGvRfDp8Gl0+Ko4Xz+h4u7kyX4+cZNuQQJIgByIOgfuMel5ndT0hJ/jJxQw6Z9IgKgToKoz8FizRwf/bdILJ1zYE1nApBkm/TsSQALkQFQ58JRJL5tILXf9XJNOMOl+EiCqBKC7N7u7V8V3m0k/33VBd7OgSdNM+nskgATIgZHmwKMmze6mhntexqSjsllGrufQ4ZEmQFVn4LFmjwr+2aQX9FzIvb6ASWeb9G06ASIgB4aSA34W7xUtz/Lba0F3s7xJx2ZHHa0mAYaSAHT2Znf2qvg+bNJp3dToUJYx6UyT7kAEiIAc6GsO+I6+34uq61cZJZPAfJPWsX+gr0lQ1Rl4rJmjgifD5DyD+XFPVRH34zGTTgqTjG6iIyADcqCjHNgdvmH7Ff+2rR91GMVrmPRSky7OpHCzSV8zyQ9aoHPBIPUc2GfSf5j0CZPe1rej+KKo+oqVCDsOzwpS+LBJXzBps0m+lzP1pODzNy8HvNC3hE3jVSa916QFJj2/okzSe8ikKf7jBpMWZkK4MDsU+X3Z950fNekz2VeO95n0eLZZsQtJIMmIcsCblu+oeyDbS/95k/48a2RXm7TEpEX+M93a7MCri3LcnEEU80x6s0nvDPsblpv0Z+Hoxc9lx0Z/xaQHTdqa7UndwaYH4qgQx/fDb1oeCVPj/2PYHvevuFeGon5XdjzMW0L3PjmKH+PUpWhjWU/fzsq2uX7apFOyIxxfY9K5Jl0QNkeuCBOifjCbF9E3TTz4fij02jB8uzMTju/U9O02l8r2IBYf4jF0HzwD77Yucu+4zv+hEI+7wtGqHqdPh7j5yNF/NONnvf7DEF+P8xvDV9anhh3Vo/9FXSzFwXp0TyDMm3CcSX55UZhNyWdUepVJr84EckYYEvqw0Ecti8PlopCcvpPUZ2POL1eFBPYkzi83hOR2MfnFd6p60re6fDbrVi6tiVx8mVav5/evGbMONxXWL1/PDxQ+h3+eSwuf8e2Fz35OgcnpgZPzcm5+8W+SnGdnJ7fsPnwsCQEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIBAMgT+H4VysAXtHo1qAAAAAElFTkSuQmCC"
      />
    </defs>
      </svg>
      <Link underline='none' href="https://www.youtube.com/@ThenThirumalai"  target="_blank" rel="noopener noreferrer">
       <Typography variant='h6' fontWeight={350} className='text-white pl-4 pt-2'>@ThenThirupathiThirumalai</Typography> 
      </Link>
      </div>}

     </div>
      <div className='overflow-x-scroll flex'>
       {tnVideoUrl.map((video, idx) => (
         <div key={idx} className='cursor-pointer mx-10 mt-10'>
         {loading ? 
          <Skeleton
          variant="rectangular"
          width={240}
          height={130}
          sx={{ borderRadius: 1 }}
         /> :
         <>
          <iframe width="240px" height="130px" src={`${video.path}?autoplay=0&controls=0&disablekb=1`} title="YouTube video player" onLoad={() =>setLoading(false)} style={{border:'2px solid white'}}></iframe>  
          {/* <Link underline='none' href={video.path} target="_blank" rel="noopener noreferrer"> */}
           <Typography variant='h6' lineHeight={1.3} fontWeight={450} mt={0.8} className='text-white' onClick={(e) => handleOpen(e,video)}>{video.name}</Typography>
          {/* </Link> */}
         </>}
         </div>  
         ))}
      </div>
      <VideoPopup open={open} setOpen={setOpen} title={title} videoSrc={videoSrc} loading={loading}/>
    </div>

  )
}

export default CustomizeYt