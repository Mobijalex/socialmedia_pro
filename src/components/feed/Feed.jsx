import React from "react";
import { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
// import { Postss } from "../../dummyData";
import axios from "axios";

function Feed(username) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchposts = async () => {
      const res = await axios.get("posts/timeline/650d64d17d031a121eb7f07c");
      setposts(res.data);
    };

    fetchposts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWraper">
        <Share />
        {posts.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
