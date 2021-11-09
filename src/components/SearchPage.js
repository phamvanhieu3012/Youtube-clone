import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage(props) {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>LỌC</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnhpmwxw7EoNdTGOBQ0TE-CwB9hpePdIUTQidu3DKA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="TaynguyenSound Official"
        verified
        subs="235N"
        noOfVideos={55}
        description="TaynguyenSound - Âm thanh đến từ núi đồi - 1 thương hiệu / Nhãn ghi âm đồng thành lập mang xu hướng nhạc Hiphop."
      />

      <hr />

      <VideoRow
        views="288N"
        timestamp="2 tháng trước"
        channel="TaynguyenSound Official"
        title="Tofu & PC - If It (Prod. VoVanDuc) M/V"
        description="If It Download & Stream: https://YYM.lnk.to/IfIt Performed by Tofu, PC Written by Tofu, PC Produced by VoVanDuc #IfIt #Tofu #PC ..."
        image="https://picsum.photos/250/140"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhpmwxw7EoNdTGOBQ0TE-CwB9hpePdIUTQidu3DKA=s176-c-k-c0x00ffffff-no-rj-mo"
      />
      <VideoRow
        views="967N"
        timestamp="5 tháng trước"
        channel="TaynguyenSound Official"
        title="Tùng TeA - Chốn Lao Xao ft. Tony Huymie (Official MV)"
        description=""
        image="https://picsum.photos/250/140"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwnhpmwxw7EoNdTGOBQ0TE-CwB9hpePdIUTQidu3DKA=s176-c-k-c0x00ffffff-no-rj-mo"
      />
    </div>
  );
}

export default SearchPage;
