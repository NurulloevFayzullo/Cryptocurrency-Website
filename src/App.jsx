
import './App.css';
import logo  from "./img/Logo.png";
import logo2 from "./img/Illustration.png";
import logo3 from "./img/Arrow Right.png";
import logo4 from "./img/[].png";
import logo5 from "./img/[] (1).png";
import logo6 from "./img/Icon.png";
import logo7 from "./img/Icon (1).png";
import logo8 from "./img/Icon (2).png";
import logo9 from "./img/Illustrations.png";
////////////////////////////////////////////////////
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { SvgIcon } from '@mui/material';
function App() {
////////////////////////////////////////////
const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: Boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
////////////////////////////////////////////  
  let icons = [
    {
      id:1,
      icon:logo6,
      number:'$30B',
      decsription:"Digital Currency Exchanged"
    },
    {
      id:2,
      icon:logo7,
      number:'10M+',
      decsription:"Trusted Wallets Investor"
    },
    {
      id:3,
      icon:logo8,
      number:'195',
      decsription:"Countries Supported"
    }
  ]
  return (
    <div>
      <div className='header'>
      <div className='text-white flex items-center py-10 justify-between w-4/5 m-auto'>
        <div className='flex items-center'>
        <img src={logo}  alt="Logo" />
        <h1>CRAPPO</h1>
        </div>
        <div className='flex justify-end items-center  w-3/4'>

        <div className=' mr-12 lg:block md:hidden sm:hidden hidden'>
          <a href="">Products</a>
          <a href="" className='px-8'>Features</a>
          <a href="" className='pr-8'>About</a>
          <a href="">Contact</a>
        </div>
        <div className='md:hidden lg:block sm:hidden hidden'>
         <a href="" className='pr-8 border-r-4 text-lg'>Login</a>
         <a href="" className='ml-8 p-5 px-14 text-lg rounded-full register'>Register</a>
        </div>
        </div>
        <div className='lg:hidden '>
        <Button onClick={toggleDrawer(true)}><SvgIcon component={ViewHeadlineIcon} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
        </div>
      </div>

         <div className='flex items-center flex-wrap mt-10  justify-between w-4/5 m-auto'>
          <div className='text-white m-auto'>
           <div className='flex items-center save rounded-full lg:p-1 md:p-2 sm:p-2 lg:w-2/3 md:max-w-4/5 sm:w-full p-1'>
            <div className='bg-white text-black rounded-full  font-bold lg:px-3 md:p-1 sm:p-2 p-1 md:px-4 py-1 mr-2'>
              <p className='text-*'>75% SAVE</p>
            </div>
            <div className='m-auto'>
          <p>For the Black Friday weekend</p>
           </div>
           </div>
           <h1 className='lg:text-6xl md:text-3xl sm:text-2xl text-3xl my-5 font-bold leading-tight '>Fastest & secure <br />
            platform to invest <br />
             in crypto</h1>
             <p className='lg:text-lg text-xs '>Buy and sell cryptocurrencies, trusted by 10M wallets <br />
              with over $30 billion in transactions.</p>
           <div className='a1 flex items-center lg:p-5 md:p-4 sm:p-3 p-2 lg:w-1/2 md:w-2/3 sm:w-2/3 rounded-full mt-5'>
           <a href="" className='m-auto text-lg'>Try for FREE </a>
           <img src={logo3} alt="" className='ml-3' />
           </div>
          </div>
          <div className='lg:w-1/2 m-auto sm:mt-10'>
            <img src={logo2} alt="" />
          </div>
         </div>
        <img src={logo4} className='absolute hidden lg:block lg:top-3/4' alt="" />
        <img src={logo5} className='absolute right-0 hidden lg:block lg:top-2/3' alt="" />
        <div className='flex mt-60 gap-10 justify-between w-4/5  m-auto flex-wrap'>

        {
          icons.map((Element)=>{
            return(
          <div key={Element.id} className='flex  w-80 items-center'>
            <div>
             <img src={Element.icon} alt="" />
            </div>
            <div className='ml-5  text-white  '>
            <p className='text-3xl'>{Element.number}</p>
            <p>{Element.decsription}</p>
            </div>
          </div>
        )
      })
    }
    </div>
         <div className='flex w-5/6  m-auto mt-20 flex-wrap justify-between items-center'>
          <div className='lg:w-1/2 md:w-full  '>
           <img src={logo9} className='w-full' alt="" />
          </div>
          <div className='text-white lg:w-2/5  ml-5 m-auto'>
           <h1 className='lg:text-5xl md:text-4xl sm:text-2xl lg:mt-0 md:mt-0 sm:mt-10  font-bold'>Why you should choose CRAPPO</h1>
           <p className='my-5 lg:text-xl md:text-lg '>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
           <button className='a1 text-lg lg:p-3 lg:px-10 px-12 py-2  rounded-full'>Learn More</button>
          </div>
         </div>
         <div className='text-white text-center mt-40'>
          <h1 className='lg:text-4xl md:text-3xl sm:text-xl font-bold mb-5'>Check how much you can earn</h1>
          <p className='lg:text-base md:text-xd'>Let’s check your hash rate to see how much you will earn today, <br />
          Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
