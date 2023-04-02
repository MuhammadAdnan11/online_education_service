import React from 'react'
import Header from './Header'
import Box from '@mui/material/Box';
import App_Bar from './App_Bar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GeoChart from './Charts/GeoChart';
import PieChart from './Charts/PieChart';
import HbarChart from './Charts/HbarChart';
import CountUp from 'react-countup';




const Analytics = () => {
  return (
    <>
    <div className='bgcolor23'>
    <App_Bar/>
    <Box height={100} />
   <Box sx={{ display: 'flex' }}>
    
   <Header/>
   
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      
   <Grid container spacing={2} >
  <Grid item xs={5}>
  <Stack spacing={2} direction="row">
  <Box sx={{width: "50%"}}>
    <Card  sx={{height:19 + "vh"}} className='gradient'>
     <CardContent>
        <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{color: "#f0fcfc" , padding: "7px 0px"}}
            >
            Visitors
        </Typography>

        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{color: "#f0fcfc"}}
            >
            <CountUp delay={0.2} end={22000} duration={.3} />
        </Typography>

        <Typography
            variant="body2"
            color="text.secondary"
            sx={{color: "#f0fcfc"}}
            >
            Since last week
        </Typography>
     </CardContent>
    </Card>

    <Card  sx={{height:19 + "vh"}} className='gradient'>
     <CardContent>
        <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{color: "#f0fcfc" , padding: "7px 0px"}}
            >
            Visitors
        </Typography>

        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{color: "#f0fcfc"}}
            >
            <CountUp delay={0.4} end={15600} duration={.6} />
            
        </Typography>

        <Typography
            variant="body2"
            color="text.secondary"
            sx={{color: "#f0fcfc"}}
            >
            Since last week
        </Typography>
     </CardContent>
    </Card>
  </Box>

   <Box sx={{width: "50%" , height :"50%"}}>
   <Card sx={{height:19 + "vh"}} className='gradientlight'>
   <CardContent>
   <Typography
   gutterBottom
   variant='p'
   component="div"
   sx={{color : "#f0fcfc" , padding: "7px 0px"}}
   >
   Visitors
   </Typography>

   <Typography
   gutterBottom
   variant='h5'
   component="div"
   sx={{color : "#f0fcfc" }}
   >
 <CountUp delay={0.2} end={35000} duration={.3} />
   
   </Typography>
   
   <Typography
   variant='body2'
   color= "text.secondary"
   sx={{color : "#f0fcfc" }}
   >
   Since last week
   </Typography>
   </CardContent>
   </Card>

   <Card sx={{height:19 + "vh"}} className='gradientlight'>
   <CardContent>
   <Typography
   gutterBottom
   variant='p'
   component="div"
   sx={{color : "#f0fcfc" , padding: "7px 0px"}}
   >
   Visitors
   </Typography>

   <Typography
   gutterBottom
   variant='h5'
   component="div"
   sx={{color : "#f0fcfc" }}
   >
 <CountUp delay={0.5} end={46000} duration={.4} />
   
   </Typography>
   
   <Typography
   variant='body2'
   color= "text.secondary"
   sx={{color : "#f0fcfc" }}
   >
   Since last week
   </Typography>
   </CardContent>
   </Card>
   </Box>
   </Stack>
  </Grid>

  <Grid item xs={7}>
  <Card sx={{height: 40 + "vh"}}>
  <CardContent>
    <HbarChart/>
  </CardContent>
  </Card>
  </Grid>
  </Grid> 


  <Box height={16}/>
   <Grid container spacing={2}>
   <Grid item xs={8}>
   <Card sx={{height: 40 + "vh"}}>
   <CardContent>
   <GeoChart/>
   </CardContent>
   </Card>
   </Grid>

   <Grid item xs={4}>
  <Card sx={{height: 40 + "vh"}}>
    <CardContent>
     <PieChart/>
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

export default Analytics