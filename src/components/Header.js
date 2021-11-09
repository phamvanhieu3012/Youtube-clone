import React, { useState } from "react";
import "./Header.css";
import {
  Apps,
  Menu,
  VideoCall,
  Search,
  Notifications,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
//es7 snippets(rfs)

function Header(props) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="Youtube-logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Tìm kiếm"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar
          src="http://lh3.googleusercontent.com/-AAucD-adsCA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnDA1ilQQdnY4zs63C2LxSYfkpIgA/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
          alt="Hieu Pham"
        />
      </div>
    </div>
  );
}

export default Header;
