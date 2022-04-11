import React, { useState } from "react";
import { Form, Row , Col , Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [details, setDetails] = useState({ email: "", password: "" });
    const adminUser = {
      email: "admin@admin.com",
      password: "Badrstores321*",
    };
  
    const log = (details) => {
      console.log("details", details);
      if (
        details.email === adminUser.email &&
        details.password === adminUser.password
      ) {
        // localStorage.setItem("isLogged", true);
        console.log("hello");
        navigate("/");
      } else {
        console.log("email or password not correct");
        setError("email or password not correct");
      }
    };
  
  return (
    <>
    <div className='logform'>
        <br/>
       <h2 className='login'> Login Form </h2><br/>

       <Row className="mt-2 ">
           
       {error !== "" ? <div className="error">{error}</div> : ""}

                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">

                 <Form >
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label className='labe'>Email address</label> <br/>
                    <Form.Control placeholder="Enter email"  type="text" name="firstName" value={details.email}
                  onChange={(e) =>setDetails({ ...details, email: e.target.value })
                  } />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <label className='labe'>Password</label><br/>
                      <Form.Control placeholder="Password"  type="password" name="password" value={details.password}
                  onChange={(e) =>setDetails({ ...details, password: e.target.value })
                  }/>
                  </Form.Group>
               
                 </Form>
                 <Button className="success btn-block bo ml-auto mr-auto" type="submit" onClick={()=>log(details)} >Login</Button>

                </Col>
            </Row>
<br/>
    </div>
    </>
  )
}

export default Login