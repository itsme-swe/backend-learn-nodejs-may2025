/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  //💥 Function will handle login network call
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset w-full max-w-xs my-2">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                value={emailId}
                className="input
                input-bordered
                w-full
                max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset w-full max-w-xs my-2">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                className="input
                input-bordered
                w-full
                max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
