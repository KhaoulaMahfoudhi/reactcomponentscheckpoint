import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
function Photo(props) {
return (

<Container>
  <Row>
    <Col  xs={12} md={20}>
    <Image className="img-thumbnail"  src="Picto-Homme.png" alt="myimage" width="180px" roundedCircle />
  </Col>
  </Row>
</Container>

)

}
export default Photo;