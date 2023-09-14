import { MoreVert } from "@material-ui/icons";
import React from "react";
import "./posts.css";

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
            <span className="postDate"> 5 min ago </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey it's my first post 😎</span>
          <img className="postImg" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
