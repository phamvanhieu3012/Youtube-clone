import {
  ExpandMore,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAlt,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Trang chủ" />
      <SidebarRow Icon={Whatshot} title="Thịnh hành" />
      <SidebarRow Icon={Subscriptions} title="Kênh đăng ký" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Thư viện" />
      <SidebarRow Icon={History} title="Lịch sử" />
      <SidebarRow Icon={OndemandVideo} title="Video của bạn" />
      <SidebarRow Icon={WatchLater} title="Xem sau" />
      <SidebarRow Icon={ThumbUpAlt} title="Video đã thích" />
      <SidebarRow Icon={ExpandMore} title="Xem thêm" />
    </div>
  );
}

export default Sidebar;
