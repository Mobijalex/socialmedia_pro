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
            <span className="sidebarListItem">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItem">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled />
            <span className="sidebarListItem">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItem">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItem">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItem">Question</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItem">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <InsertInvitation className="sidebarIcon" />
            <span className="sidebarListItem">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItem">Courses</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
