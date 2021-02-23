import React from "react";
import VideoPlayer from 'react-simple-video-player';
import Back from  '../../assets/backgrounds/red-luxury-sedan-road.jpg';
import EA from '../../assets/Emirates Auction - We Can Reach You Anywhere.mp4';
import PlayIcon from '../../assets/icons/play-icon.svg'
import './sellvideo.scss';
import {FormattedMessage} from "react-intl";

const SellVideo = props =>  {
    return (
        <div className="video">
            <VideoPlayer
                className="video_player"
                aspectRatio="4:3"
                url={EA}
                poster={Back}
                width={560}
                height={330}
                playIcon={<div ><PlayIcon/></div>}
            />
            <h3>
                <FormattedMessage id="startToday.videoSection.first" />
            </h3>
            <h4>
                <FormattedMessage id="startToday.videoSection.second" />
            </h4>
            <h5>
                <FormattedMessage id="startToday.videoSection.third" />
            </h5>
            <h6>
                <FormattedMessage id="startToday.videoSection.fourth" />
            </h6>

        </div>
        )
}


export default SellVideo;