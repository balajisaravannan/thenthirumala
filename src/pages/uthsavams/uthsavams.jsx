import React, { useState } from 'react'
import UthsavamsContent from '../../components/layout/uthsavams/content/uthsavamsContent'
import UthsavamEvent from '../../components/layout/uthsavams/events/uthsavamevent'
import CustomizeAutocomplete from '../../components/autocomplete/customizeAutocomplete'
import { Avatar, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import RightDesign from '../../assets/images/png/rside.png'
import LeftDesign from '../../assets/images/png/lside.png'
import EventList from '../../components/layout/uthsavams/footer/eventlist'

const Uthsavams = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [dialogTitle, setDialogTitle] = useState('');
  const menuItems = [
    'வருடாந்தர உத்சவங்கள்',
    'மாதாந்திர உத்சவங்கள்',
    'வாராந்திர உத்சவங்கள்',
    'நித்ய உத்சவங்கள்',
  ];  

  const data = [
    {
      title: "ஸ்ரீராம நவமி",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
      images : [
        {image:'https://imgtemple.dinamalar.com/kovilimages/news/LRG_20170408125258085236.jpg'},
        {image:'https://imagesvs.oneindia.com/ta/img/2022/04/rama-navami-5-1618914235-1649477898.jpg'},
        {image:'https://imgtemple.dinamalar.com/kovilimages/news/LRG_20170408125258085236.jpg'},
        {image:'https://imgtemple.dinamalar.com/kovilimages/news/LRG_20170408125258085236.jpg'},
        {image:'https://imgtemple.dinamalar.com/kovilimages/news/LRG_20170408125258085236.jpg'},
      ]
    }, 
    {
      title: "ஸ்ரீ பத்மாவதி ஸ்ரீநிவாஸ ப்ரணயகலகம்",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவ."
    }, 
    {
      title: "ஸ்ரீ அனுமத் ஜெயந்தி",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. "
    }, 
    {
      title: "ஸ்ரீ கருடாழ்வார் ஜெயந்தி",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது."
    }, 
    {
      title: "ஸ்ரீ ராமானுஜர் உத்சவம்",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள்."
    }, 
    {
      title: "ஸ்ரீ பத்மாவதி ஸ்ரீநிவாஸ ப்ரணயகலகம்",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவ."
    }, 
    {
      title: "ஸ்ரீ அனுமத் ஜெயந்தி",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. "
    }, 
    {
      title: "ஸ்ரீ கருடாழ்வார் ஜெயந்தி",
      subtitle: "(புரட்டாசி)",
      content:"விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது."
    }, 
  ]

  const theme = useTheme()
  const [menuValue, setMenuValue] = useState('')
  const isCheck = useMediaQuery(theme.breakpoints.down('1060'))
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  // console.log(menuValue)
  
  return (
    <div style={{backgroundColor:'#EFEFEF'}}>
     <UthsavamsContent/>  
     <div className='relative'>
      {!isCheck && 
      <>
      <div className="absolute left-0" style={{top:'-18px'}}>
        <Avatar 
          variant="square" 
          src={LeftDesign} 
          alt="left" 
          sx={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div className="absolute right-0" style={{top:'-18px'}}>
        <Avatar 
          variant="square" 
          src={RightDesign} 
          alt="right" 
          sx={{ width: '200px', height: 'auto' }}
        />
      </div>
      </>}
     {!isCheck ? <div className='mt-12'>
     <ul className='flex justify-center cursor-pointer'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className='px-12 relative'
          >
            <Typography
              variant='h5'
              textAlign='center'
              fontWeight={activeIndex === index ? 550 : 450}
              color={activeIndex === index ? '#BD219B': '#000000'}
              className={`${activeIndex === index ? 'active' : ''}`}
            >
              {item}
              {activeIndex === index && (
                <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${isCheck ? ' top-10' : ' top-5'}`}>
                  <svg
                    width={95}
                    height={8.085}
                    viewBox='0 0 95 8.085'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx={47.5}
                      cy={4.043}
                      r={3.79}
                      fill='#BD219B'
                      stroke='#BD219B'
                      strokeWidth={0.5053191489361702}
                    />
                    <path
                      d='M39.92 4.043H0.505'
                      stroke='#BD219B'
                      strokeWidth={1.0106382978723405}
                      strokeLinecap='round'
                    />
                    <path
                      d='M94.495 4.043h-39.415'
                      stroke='#BD219B'
                      strokeWidth={1.0106382978723405}
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
              )}
            </Typography>
          </li>
        ))}
      </ul>
     </div> :
      <div className='w-56 m-6 mb-12'>
        <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={menuValue}
         size='small'
         sx={{width:240, borderRadius:'12px'}}
         onChange={(e) => setMenuValue(e.target.value)}>
         {menuItems.map((item, idx) => (
          <MenuItem value={idx}>{item}</MenuItem>
         ))}
        </Select> 
        {/* <CustomizeAutocomplete 
         id='name'
         options={menuItems}
         value={menuValue}
         onChange={(_,e) => setMenuValue(e)}
         getOptionLabel={(option) => option || ''}
          /> */}
      </div>}
      </div> 
      {activeIndex === 0 && <UthsavamEvent />}
      {activeIndex === 1 && <Typography className='text-center p-10'>மாதாந்திர உத்சவங்கள்</Typography>}
      {activeIndex === 2 && <Typography className='text-center p-10'>வாராந்திர உத்சவங்கள்</Typography>}
      {activeIndex === 3 && <Typography className='text-center p-10'>நித்ய உத்சவங்கள்</Typography>}

     <EventList data={data} setOpenDialog={setOpenDialog} setSelectedImages={setSelectedImages} setDialogTitle={setDialogTitle} openDialog={openDialog} selectedImages={selectedImages} dialogTitle={dialogTitle}/>
    </div>
  )
}

export default Uthsavams