import { MoreVert } from "@material-ui/icons";
import React from "react";

function Posts() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="posttop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUserName">Mobz</span>
            <span className="postUserName">5 min ago </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}

export default Posts;
