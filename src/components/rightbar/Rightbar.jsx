import React from "react";
import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="righBarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="bithdayText">
            <b>Sarath</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Maria</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
