import React from 'react'
import { Box ,CardContent,CardMedia,Typography} from '@mui/material'
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from '../utils/constant'


const ChannelCard = ({ ChannelDetail,marginTop }) => {
  return (
    <Box sx={{
      boxShadow:"none",
      borderRadius:"20px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:{xs:"356px",md:"320px"},
      height:'326px',
      margin:"auto",
      marginTop,


   
       



    }} >
    <Link  to={`/channel/${ChannelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}


          alt ={ChannelDetail?.snippet?.title}
        
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />

        <Typography variant='h6'>
        {ChannelDetail?.snippet?.title}
        <CheckCircleIcon sx={{ fontSize: "18px", color: "gray", ml: "5px" }} />
       </Typography>
       {ChannelDetail?.statistics?.subscriberCount &&(
         <Typography>
         {parseInt(ChannelDetail?.statistics ?.subscriberCount).toLocaleString()}    Subscriber
        </Typography>

       ) }

      

      </CardContent>
      </Link>

    </Box>
  )
}

export default ChannelCard