import { MoreVert } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./posts.css";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

// import { Users } from "../../dummyData";

function Posts({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setisLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_URL;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const clickHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };
  // console.log("user", user);
  // console.log("post", post);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="posttop">
          <div className="postTopLeft">
            <Link to={`Profile/${user.username}`}>
              <img
                className="postProfileImage"
                src={user.profilePicture || PF + "person/noAvatar.png"}
                alt=""
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
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
