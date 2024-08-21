import React from "react";
import CustomizeAutocomplete from "../../../autocomplete/customizeAutocomplete";
import "./uthsavamevent.css";
import { Box, Button, Typography } from "@mui/material";
import Background from '../../../../assets/images/svg/garudasevai.svg'

const UthsavamEvent = () => {
  const updateData = [
    {
      title: "பிரம்மோத்சவம்",
      subtitle: "(புரட்டாசி)",
      content:
        "விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
    },
    {
      title: "வசந்தோத்ஸவம்",
      subtitle: "(புரட்டாசி)",
      content:
        "விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
    },
    {
      title: "டோலோத்ஸவம்",
      subtitle: "(புரட்டாசி)",
      content:
        "விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
    },
    {
      title: "தெப்போத்சவம்",
      subtitle: "(புரட்டாசி)",
      content:
        "விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
    },
    {
      title: "பவித்ரோத்ஸவம்",
      subtitle: "(புரட்டாசி)",
      content:
        "விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
    },
  ];
  return (
    <div className="uthsavam">     
       <div className='uthsavam_container'>
        {updateData.map((item, idx) => (
          <div className='uthsavam_event'>
            <div className='uthsavam_event-content'>
              <div class='octagon'></div>
              <Typography
                fontWeight={600}
                mt={7}
                sx={{
                  background:
                    "linear-gradient(90deg, #052DFF 17.07%, #FA1414 85.78%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                variant='h4'
                align='center'
              >
               {item.title}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                color={"#000000"}
                lineHeight={0.8}
                align='center'
              >
                {item.subtitle}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                color={"#000000"}
                mt={2}
                lineHeight={1.3}
                align='center'
                sx={{
                  height: 94,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                }}
              >
              {item.content}
              </Typography>
              <div className='w-full flex justify-center'>
                {" "}
                <Button
                  size='small'
                  sx={{
                    background:
                      "linear-gradient(90deg, #E4B614 0%, #BD219B 100%), linear-gradient(180deg, #E6C44B 0%, #BE229B 98.61%)",
                    color: "white",
                    px: 1,
                    py: 0.4,
                    borderRadius: "12px",
                    mt: 1.2,
                    fontSize: 12,
                  }}
                >
                  படங்கள்
                </Button>
              </div>
            </div>
          </div>
        ))} 
       </div>
       <img className="uthsavam-bg" src={Background}/>
       
    </div>
  );
};

export default UthsavamEvent;
