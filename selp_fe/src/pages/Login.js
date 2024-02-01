import React from "react";
import "styles/login.css";
const Login = () => {
  return (
    <div
      className="container login"
      style={{ position: "absolute", paddingTop: "90px" }}
    >
      <div className="login_content">
        <div className="login_area">
          <h2 className="login_title">
            <span className="blind">KREAM</span>
          </h2>
          <div className="input box" style={{paddingTop: "50px"}}>
            <h3 className="input_title">이메일 주소</h3>
            <div className="input_item">
              <input
                type="email"
                className="input_txt"
                placeholder="예) kream@kream.co.kr"
                autoComplete="off"
              ></input>
              <button type="button" className="btn"></button>
            </div>
          </div>
          <div className="input box"></div>
          <div className="login_btn_box"></div>
          <ul className="look_box"></ul>
          <div className="social_login"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
