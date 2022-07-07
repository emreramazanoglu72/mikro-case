import { Link } from "@reach/router";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AppContext } from "../AppProvider";

const accountInfo = {
  userName: "mikro@mikro.com.tr",
  password: "123456",
};

const Login = () => {
  const context = useContext(AppContext);
  const [userName, setUserName] = useState("mikro@mikro.com.tr");
  const [password, setPassword] = useState("123456");

  const loginAction = (e) => {
    e.preventDefault();
    if (userName == accountInfo.userName && password == accountInfo.password) {
      localStorage.setItem("auth", true);
      context.setAuth(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Kullanıcı Adınızı Veya Şifrenizi Kontrol Ediniz",
      });
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginArea col-sm-6">
        <div>
          <img src="images/logo.png" alt="" />
          <p>Google Maps’e Hosgeldiniz.</p>
        </div>

        <Form onSubmit={loginAction} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="email"
              value={userName}
              placeholder="E-mail adresinizi giriniz"
              onChange={(text) => setUserName(text.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="******"
              onChange={(text) => setPassword(text.target.value)}
            />
          </Form.Group>
          <div className="resetPassaword">
            <Link to="/reset">
              <a href="/reset">Şifremi Unuttum</a>
            </Link>
          </div>
          <Button className="w-100" variant="primary" type="submit">
            Giriş Yap
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
