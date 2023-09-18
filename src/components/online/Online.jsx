import "./online.css";

function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightBarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
