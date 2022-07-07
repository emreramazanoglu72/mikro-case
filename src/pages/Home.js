import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Api from "../Api";
import UserCard from "../components/UserCard";

const Home = () => {
  const [userList, setUserList] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    getUserList();
  }, [limit]);

  const getUserList = () => {
    Api(limit).then((response) => setUserList(response));
  };

  const limitIncrease = () => setLimit(limit + 10);

  return (
    <div className={"homeContainer"}>
      <div className="header">
        <img src="images/logo.png" alt="" />
      </div>
      <Row>
        <Col sm={3}>
          <div className="userList">
            <p>Kullanıcı Listesi</p>

            {userList?.data?.map((item) => {
              return <UserCard item={item} />;
            })}
            <Button
              onClick={limitIncrease}
              className="w-100 mt-2"
              variant="link"
              type="submit"
            >
              Daha fazla yükle
            </Button>
          </div>
        </Col>
        <Col sm={9} className="contextCol">
          <div className="content">
            <img src="images/bg.png" className="bg" />
            <p>Google Maps’e Hoşgeldiniz</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
