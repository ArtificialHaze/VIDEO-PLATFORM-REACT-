import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchApi } from './fetchApi';

const ChannelDetails = () => {
  const {id}=useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetails(data?.items[0]));

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id])
  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{background:'lightpink',zIndex:10,height:'300px'}}>
          <ChannelCard channelDetails={channelDetails} marginTop="-110px"/>
        </div>
      </Box>
      <Box display={'flex'} p={2} >
        <Box sx={{marginRight:{sm:'100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails