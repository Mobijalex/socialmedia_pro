import { MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import "./posts.css";
import { Users } from "../../dummyData";

function Posts({ Post }) {
  const [like, setLike] = useState(Post.like);
  const [isLiked, setisLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_URL;

  const clickHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="posttop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={Users.filter((u) => u.id === Post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === Post.userId)[0].username}
            </span>
            <span className="postDate">{Post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{Post.desc}</span>
          <img className="postImg" src={PF + Post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={clickHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={clickHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people liked it</span>
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
