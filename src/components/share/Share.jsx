import React from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";

function Share() {
  return (
    <div className="Share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="Wat's in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareoptions">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">photo or vedio</span>
          </div>
          <div className="shareoptions">
            <Label htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareoptions">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareoptions">
            <EmojiEmotions htmlColor="gold" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
