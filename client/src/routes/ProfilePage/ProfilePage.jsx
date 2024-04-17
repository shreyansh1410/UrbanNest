import { useNavigate } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
import { userData } from "../../lib/dummydata";
import "./profilePage.scss";

function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={userData.img} alt="user image" />
            </span>
            <span>Username: {userData.name}</span>
            <span>E-Mail: johndoe@gmail.com</span>
            <button onClick={handleLogout}>Log Out</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved Lists</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
