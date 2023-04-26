import React from 'react';
import {Box,CardContent,CardMedia,Typography} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from './constants';

const ChannelCard = ({channelDetails,marginTop}) => {
  return (
    <Box 
    sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'320px'},
        height:'326px',
        margin:'auto',
        marginTop:marginTop
    }}
    >
        <Link to={`/channel/${channelDetails?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center', textAlign:'center', color:'#fff'}}>
                <CardMedia image={channelDetails?.snippet?.thumbnails?.high?.url||demoProfilePicture} sx={{borderRadius:'50%',width:'180px',height:'180px',mb:2,border:'1px solid #e3e3e3'}}/>
                <Typography variant='h6'>
                    {channelDetails?.snippet?.title}
                    <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
                </Typography>
                {channelDetails?.statistics?.subscriberCount &&(
                    <Typography>
                        {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard