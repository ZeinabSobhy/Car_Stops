import React from "react";
import './video.scss';
import Back from  '../../assets/backgrounds/red-luxury-sedan-road.jpg';
import EA from '../../assets/Emirates Auction - We Can Reach You Anywhere.mp4';
import VideoPlayer from 'react-simple-video-player';

const Video =  props =>   {
return(
    <div className="video_sara">
        <VideoPlayer   url={EA}
                       poster={Back}
                       width={560}
                       height={330}/>

    </div>
)
}


export default Video;