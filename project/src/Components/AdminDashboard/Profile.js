import React from 'react'
import Header from './Header'
import App_Bar from './App_Bar';
import Box from '@mui/material/Box';
// import Grid from '@mui/joy/Grid';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordianDash from './AccordianDash';
import BarChart from './Charts/BarChart';
import CountUp from 'react-countup';





const Profile = () => {
  return (
    <>
    <div className='bgcolor23'>
    <App_Bar/>
   <Box height={120} />
   <Box sx={{ display: 'flex' }}>
    
   <Header/>
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

   <Grid container spacing={2} sx={{ flexGrow: 1 }}  >
      <Grid lg={8} xs={6} >
      <Stack spacing={2} direction="row" >
      <Card sx={{ minWidth: 48 + "%" , height: 150}} className='gradient '>
      <CardContent>
      <div className='iconstyle'>
        <CreditCardIcon />
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffffff"}}>
           $ <CountUp delay={0.2} end={500} duration={.3} />
        
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
        Total Earning
        </Typography>

      </CardContent>
    </Card>

    <Card sx={{ minWidth: 49 + "%" , height: 150}} className='gradientlight'>
      <CardContent>
      <div className='iconstyle'>
        <ShoppingBagIcon />
      </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffffff"}}>
        $ <CountUp delay={0.2} end={900} duration={.3} />
        
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
        Total Orders
        </Typography>
         
      </CardContent>
    </Card>
   </Stack>
      </Grid>

      

      <Grid lg={4} xs={6} >
      <Stack spacing={2} >

      <Card className='gradientlight'>
      <Stack spacing={2} direction="row">
      <div className='iconstyle'>
      <StorefrontIcon/>
      </div>
      <div className='paddingall'>
      <span className='pricetitle'> $230k</span><br/>
      <span className='pricesubtitle'>Total Income</span>
      </div>
      </Stack>
      
    </Card>

    <Card >
      <Stack spacing={2} direction="row">
      <div className='iconstyleblack'>
      <StorefrontIcon/>
      </div>
      <div className='paddingall'>
      <span className='pricetitle'> $230k</span><br/>
      <span className='pricesubtitle'>Total Income</span>
      </div>
      </Stack>
      
    </Card>
      </Stack>
      </Grid>
    
    </Grid>

   <Box height={30} />
    
    <Grid container spacing={2} sx={{ flexGrow: 1 }} >

      <Grid lg={8}>
      <Card sx={{ minWidth: 48 + "%", height: 60 + "vh" }}>
      <CardContent>
      <BarChart/>
      </CardContent>
    </Card>
      </Grid>

      <Grid lg={4}>
      <Card sx={{ height: 60 + "vh"}}>
      <CardContent>
         
      <div className='paddingall'>
      <span className='pricetitle'> Popular Courses</span><br/>
      
      </div>
       <AccordianDash/>
      </CardContent>
    </Card>
      </Grid>
    
    </Grid>
        
      </Box>

   </Box>

    </div>
   
       

    
    </>
  )
}

export default Profile