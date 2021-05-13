import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className= "sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://cdn.wallpapersafari.com/15/16/54Hd0u.jpg" alt="" />
        <Avatar />
        <h2>Osheit chang</h2>
        <h4>Osheit@theking.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber"> 2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber"> 2,443</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('Design')}
          {recentItem('Developer')}
          {recentItem('Software')}
          {recentItem('developer')}
          {recentItem('engineering')}
      </div>
    </div>
  );
}

export default Sidebar;
