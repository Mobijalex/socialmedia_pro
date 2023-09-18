import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { Postss } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWraper">
        <Share />
        {Postss.map((p) => (
          <Posts key={p.id} Post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
