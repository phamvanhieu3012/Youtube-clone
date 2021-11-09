import { Avatar } from "@material-ui/core";
import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

function ChannelRow(props) {
  const { image, channel, subs, noOfVideos, description, verified } = props;
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <MusicNote />}
        </h4>
        <p>
          {subs} người đăng ký • {noOfVideos} video
        </p>
        <p>{description}</p>
      </div>
      <div>
        <button className="btn btn--red">ĐĂNG KÝ</button>
      </div>
    </div>
  );
}

export default ChannelRow;
