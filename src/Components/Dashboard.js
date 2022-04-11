import React from 'react'
import { Col , Row , Card } from 'react-bootstrap'
import Header from './Header'
import Navb from './Navb'
import Navr from './Navr'

const Dashboard = () => {
  return (
    <>
      <Header/>
      <br/>
      <div className='naviii'>
        <Navr/>
      </div>
      
      <Row>
          <Col lg={11} md={6} xs={12} className=" m-auto direct">

          <div className='container-fluid con'>
          <br/><br/>
              <p className='par'>لوحة التحكم: التقارير & الاحصائيات</p>
          <br/><br/>
            <Row xs={1} md={2} className="g-4">
  
          <Col>
            <Card>
              <Card.Body style={{backgroundColor:"#e35b5a" , color:"white"  }}>
                <Card.Title style={{fontSize:"18px"}}>عدد المنتجات</Card.Title>
                <Card.Title style={{fontSize:"18px"}}>1290</Card.Title>
              </Card.Body>
            </Card>
            <br/>
         </Col>
  
          <Col>
            <Card>
              <Card.Body style={{backgroundColor:"#578ebe" , color:"white"  }}>
                <Card.Title style={{fontSize:"18px"}}>عدد العملاء</Card.Title>
                <Card.Title style={{fontSize:"18px"}}>73</Card.Title>
              </Card.Body>
            </Card>
            <br/>
         </Col>

             </Row>
             <Row xs={1} md={2} className="g-4">
  
          <Col>
            <Card>
              <Card.Body style={{backgroundColor:"#8775a7" , color:"white"  }}>
                <Card.Title style={{fontSize:"18px"}}>عدد الطلبات الجديده</Card.Title>
                <Card.Title style={{fontSize:"18px"}}>0</Card.Title>
              </Card.Body>
            </Card>
            <br/>
         </Col>
  
          <Col>
            <Card>
              <Card.Body style={{backgroundColor:"#44b6ae" , color:"white"  }}>
                <Card.Title style={{fontSize:"18px"}}>عدد الطلبات</Card.Title>
                <Card.Title style={{fontSize:"18px"}}>23</Card.Title>
              </Card.Body>
            </Card>
         </Col>

             </Row>


          </div>

          </Col>
          <Col lg={1} md={6} xs={12} className=" m-auto direct directt">
          <Navb/>
          </Col>
      </Row>
     
    </>
  )
}

export default Dashboard