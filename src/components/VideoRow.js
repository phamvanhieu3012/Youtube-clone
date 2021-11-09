import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoRow.css";

function VideoRow(props) {
  const {
    views,
    timestamp,
    channel,
    title,
    description,
    image,
    channelImage,
  } = props;
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {views} lượt xem • {timestamp}
        </p>
        <p className="videoRow__channel">
          <Avatar className="videoRow__logo" src={channelImage} alt="" />
          {channel}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
