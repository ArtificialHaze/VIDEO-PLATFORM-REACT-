import React from 'react';
import {useState,useEffect} from 'react';
import {Stack,Box,Typography} from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import {fetchApi} from './fetchApi';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
      setVideos(data.items);
    });
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:"column",md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyright 2023 &copy; DreamDevs.
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'#fff'}}>{selectedCategory} 
          <span style={{color:'#f31503'}}> Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed