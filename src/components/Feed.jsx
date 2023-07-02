import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Side from "./Side";
import Videos from "./Videos"
import { fetchFromApi } from "../utils/fetchFromApi";



const Feed = () => {
 const[selectedCategory,setSelectedCategory]=useState('New')
 const[videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{
      setVideos(data.items)

    })

  },[selectedCategory])
  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Side  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2023 Prasad Zalake (All Right Reserved)
        </Typography>
      </Box>


      <Box sx={{
        p:"2px",overflowY:"auto",
        height:"90vh",flex:2
      }}
      >

      <Typography variant="h4" fontWeight="bold" mb="2px" sx={{color:"white", p:"25px"}} 
       >
      
        {selectedCategory}
        <span style={{color:"red"}}  >Videos</span>
      
      </Typography>
      <Videos videos={videos}/>
      </Box>
     

      
    </Stack>
  );
};

export default Feed;