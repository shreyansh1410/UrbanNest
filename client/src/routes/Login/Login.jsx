import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    //form actions in react 19
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username);
    console.log(password);

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      // USER LOGGED IN SUCCESSFULLY
      setErr("");
      // console.log(res);

      updateUser(res.data);
      // localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      // UESR NOT LOGGED IN
      console.log(error);
      setErr(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {/* show the error  message if user not logged in  */}
          {err && <span>{err}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
