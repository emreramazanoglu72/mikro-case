import { useNavigate } from "@reach/router";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AppContext } from "../AppProvider";

const ResetPassword = () => {
  const navigate = useNavigate();
  const goLogin = () => navigate("/");
  return (
    <div className="loginContainer">
      <div className="loginArea col-sm-6">
        <div>
          <img src="images/logo.png" alt="" />
          <p>Şifrenizi sıfırlamak istediğiniz E-Mail adresini girin</p>
        </div>

        <div className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail adresinizi giriniz"
            />
          </Form.Group>

          <Button
            onClick={goLogin}
            className="w-100"
            variant="primary"
            type="submit"
          >
            Giriş Yap
          </Button>

          <Button
            onClick={goLogin}
            className="w-100 mt-2"
            variant="link"
            type="submit"
          >
            veya Giriş Yapın
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
