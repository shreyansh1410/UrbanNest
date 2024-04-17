import { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    //form actions in react 19
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username);
    console.log(email);
    console.log(password);

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      // USER LOGGED IN SUCCESSFULLY
      console.log(res);
    } catch (error) {
      // UESR NOT CREATED SUCCESSFULLY
      console.log(err);
      setErr(error.res.data.message);
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
