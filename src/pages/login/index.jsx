import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { users } from "../../constant";
// image
import logo from "../../asset/logo.png";
import logoTitle from "../../asset/logo-title.png";
import google from "../../asset/G.png";
import mail from "../../asset/mail.png";
import iconMail from "../../asset/icon-mail.png";
import iconPass from "../../asset/icon-pass.png";
import iconEye from "../../asset/eye-slash.png";
import arrowLeft from "../../asset/arrow-left.png";
import arrowRight from "../../asset/arrow-right.png";

const Email = ({ onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Vui lòng nhập một địa chỉ email hợp lệ.");
      return;
    }
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        navigate("/onboarding");
      }, 1000);
    } else {
      setError("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="email-login fade-in">
      <div className="main-login">
        <div className="input-login">
          <img src={iconMail} alt="icon-mail" />
          <p>Adresse mail</p>
          <input
            type="text"
            placeholder="Adresse@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-login">
          <img src={iconPass} alt="icon-pass" />
          <p>Mot de passe</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Motdepasse"
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={iconEye} alt="icon-eye" onClick={toggleShowPassword} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-login">
          <button className="button-left" onClick={onBack}>
            <img src={arrowLeft} alt="arrow-left" />
          </button>
          <button className="button-right" onClick={handleLogin}>
            Créer mon compte
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [showConnection, setShowConnection] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleMailConnection = () => {
    setShowConnection(false);
    setShowLogin(true);
  };

  const handleBack = () => {
    setShowConnection(true);
    setShowLogin(false);
  };

  return (
    <div className="main">
      <div className="img-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="title">
        <div>
          <p className="title-compte">Créer un compte</p>
          <img src={logoTitle} alt="logo-title"></img>
        </div>
      </div>
      {showConnection && (
        <div className="connection fade-in">
          <div className="main-connection">
            <button className="btn-connection">
              <img src={google} alt="google"></img>Connection avec Google
            </button>
            <div className="after-element"></div>
            <button className="btn-connection" onClick={handleMailConnection}>
              <img src={mail} alt="mail"></img>Connection avec Mail
            </button>
          </div>
        </div>
      )}
      {showLogin && <Email onBack={handleBack} />}
    </div>
  );
};

export default Login;
