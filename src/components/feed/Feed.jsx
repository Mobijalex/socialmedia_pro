import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWraper">
        <Share />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
