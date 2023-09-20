import "./online.css";

function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightBarProfileImg"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
