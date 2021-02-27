import React from "react";
import './video.scss';
import Back from  '../../assets/backgrounds/red-luxury-sedan-road.jpg';
import EA from '../../assets/Emirates Auction - We Can Reach You Anywhere.mp4';
import VideoPlayer from 'react-simple-video-player';
import {FormattedMessage} from "react-intl";
const Video =  props =>   {
return(
    <div className="video_sara">

        <VideoPlayer   url={EA}
                       poster={Back}
                       width={560}
                       height={330}/>

                       <div className="video_txt">
                           <h3> <FormattedMessage id="startToday.videoSection.first" /></h3>
                           <h4><FormattedMessage id="startToday.videoSection.second" /></h4>
                           <h5><FormattedMessage id="startToday.videoSection.third" /></h5>
                           <h6><FormattedMessage id="startToday.videoSection.fourth" /></h6>
                       </div>
    </div>
)
}


export default Video;