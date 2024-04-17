import { useNavigate } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
// import { userData } from "../../lib/dummydata";
import "./profilePage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      // localStorage.removeItem("user");
      updateUser(null);
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
              Avatar:{" "}
              <img
                src={currentUser.avatar || "/noavatar.png"}
                alt="user image"
              />
            </span>
            <span>Username: {currentUser.username}</span>
            <span>E-Mail: {currentUser.email}</span>
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
