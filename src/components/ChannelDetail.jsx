import React from 'react'
import { Box } from '@mui/material'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromApi } from '../utils/fetchFromApi'


const ChannelDetail = () => {

  const [channelDetails,setChannelDetails]=useState(null);
  const [video,setVideo]=useState([])

  const { id } = useParams();

 
   

   useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetails(data?.items[0]))


    fetchFromApi(`search?channelId=${id}&part=snippet &order=date`)
    .then((data)=>setVideo(data?.items))

     },[id] )
  return (

   <Box minHeight="90vh">
    <Box>
     <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
      <ChannelCard ChannelDetail={channelDetails} 
      marginTop={"-110px"}/>



    </Box>
    <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={video} />
     </Box>

   </Box>


  )
}

export default ChannelDetail