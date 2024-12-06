import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Login() {
  const [userId, setUserId] = useState("");
  const [mobileNmbr, setMobileNmbr] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://sa-chits-backend.onrender.com/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, mobileNmbr }),
      };
      const response = await fetch(url, options);
      // NEED TO LOADING IMAGE
      // const data = await response.json();

      if (response.ok) {
        navigation("/sheets");
        console.log(response.json());
      }
    } catch (e) {
      console.log(e);
    }
    setMobileNmbr("");
    setUserId("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-label-container">
          <label htmlFor="userId">USER ID</label>
          <input
            type="text"
            id="userId"
            value={userId || ""}
            onChange={(e) => setUserId(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="input-label-container">
          <label htmlFor="mobilenmbr">MOBILE NUMBER</label>
          <input
            type="text"
            id="mobilenmbr"
            value={mobileNmbr || ""}
            onChange={(e) => setMobileNmbr(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
