import { Col, Row } from "react-bootstrap";

const UserCard = ({ item }) => {
  return (
    <Row className="userCard">
      <Col sm="2" xs={2} className="m-auto">
        <img src={item.picture} className="avatar" />
      </Col>
      <Col sm="10" xs={10} className="d-grid">
        <span className="userName">
          {item.title} {item.firstName} {item.lastName}
        </span>
        <span className="userMail">
          Email: {item.firstName}.mail@example.com
        </span>
        <span className="userPhone">Phone: {item.id}</span>
      </Col>
    </Row>
  );
};

export default UserCard;
