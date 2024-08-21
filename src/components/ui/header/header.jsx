import { Avatar, Drawer, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import "./header.css";
import HomeContent from "./list/homeContent";
import EventList from "./list/eventlist/eventlist";
import MainContent from "./list/maincontent/maincontent";
import TodayEvent from "./list/todayevent/todayevent";
import MobileMaincontent from "./list/maincontent/mobilemaincontent";
import HeaderContent from "./list/headercontent/headercontent";
import Arr from '../../../assets/images/svg/arr.svg'

const Header = () => {
  
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("768"));
  const [isRight, setIsRight] = useState(false);
  const location = useLocation();
  const isMainContent = Boolean(location.pathname == "/");
  
  return (
    <>
      <HeaderContent />
      {isMainContent ? (
        <div className='header_content'>
         <div className="header-spiral">
          <div className='header-ellipsi' />
            {isResponsive ? (
              <div style={{ zIndex: "9" }}>
                <MobileMaincontent />
                <div
                  style={{zIndex:2,
                    background:
                      "linear-gradient(90deg, #E4B614 0%, #BD219B 100%), linear-gradient(180deg, #E6C44B 0%, #BE229B 98.61%)",
                  }}
                  className='absolute right-0 top-30 bg-gradient-p-s rounded-s-25'
                  onClick={() => setIsRight(true)}
                >
                 <Avatar src={Arr} variant="sqaure" sx={{width:'40px',height:'auto'}}/>
                </div>
              </div>
            ) : (
              <div className='flex justify-between h-full'>
                <EventList />
                <MainContent />
                <TodayEvent />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div style={{ marginBlockEnd: "44px" }} />
      )}

      <Drawer
        open={isRight}
        onClose={() => setIsRight(false)}
        anchor='right'
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "transparent",position:'absolute', right:'-10px'} }}
      >
        <Box className='bg-yellow-950 h-full rounded-s-25 drawer-box-contain p-10'>
          <div
            className='w-full h-full rounded-s-25 text-white p-10 overflow-y-scroll'
            style={{ width: 180, backgroundColor: "#20130E" }}
          >
            <HomeContent />
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
