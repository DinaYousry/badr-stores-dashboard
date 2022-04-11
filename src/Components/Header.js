import React from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { logoo} from '../Assets';


const Header = () => {

    const navigate = useNavigate();

    function logOut() {
        navigate("/login");
      }
    
  return (
    <div>
        <Row>
            <Col lg={2} md={5} xs={5} className="mt-2">
             <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Hello Admin
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop">
                <Dropdown.Item className="drpdown" onClick={logOut}>
                  logout
                </Dropdown.Item>
              </Dropdown.Menu>
             </Dropdown>
            </Col>
            <Col lg={9} md={1} xs={1} className="mt-2">
            </Col>

            <Col lg={1} md={5} xs={5} className="mt-2">
                <img id="myDIV" src={logoo} height="45" alt=""/> 
            </Col>
        </Row>
    </div>
  )
}

export default Header