import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  
  return (

    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>

      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>

        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
           
          sx={{ width: { xs: '100%', sm: '358px'  ,md:"320px"}, height: 180 }}

        />
        </Link>




        <CardContent sx={{
          backgroundColor:'#1e1e1e',
          height:'108px'
        }}>

        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
          <Typography sx={{color:"White" ,fontWeight:"bold"}}>
            {snippet?.title.slice(0,70)}
          </Typography>
        </Link>
     
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >

      <Typography sx={{color:"grey", fontWeight:"bold"}}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "18px", color: "gray", ml: "5px" }} />
          
      </Typography>   
    
      
      
      </Link>
    


      </CardContent>
      
    </Card>
  )
}


export default VideoCard