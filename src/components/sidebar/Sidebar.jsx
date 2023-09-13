import React from "react";
import "./sidebar.css";
import {
  Bookmark,
  Chat,
  Group,
  Help,
  InsertInvitation,
  PlayCircleFilled,
  RssFeed,
  School,
  Work,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feeds</span>
          </li>

          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <InsertInvitation className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Showmore</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath Hover</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jino stephen</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Monu Mohan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/8.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sarath</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
