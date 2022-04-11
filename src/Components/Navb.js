import React from 'react'
import { Row , Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navb = () => {
  return (
    <>
     <Row>
         <Col lg={12} md={6} xs={12} className=" m-auto direct">
           <Link to="/"> <p> قائمة البرنامج </p> </Link>
           <Link to="/main"><p> تصنيفات رئيسية </p></Link>
           <Link to="/sub"><p> تصنيف فرعي </p></Link>
           <Link to="/general"><p> صفات عامة </p></Link>
           <Link to="/product"><p> المنتجات </p></Link>
           <Link to="/new"><p> طلبات جديدة </p></Link>
           <Link to="/old"><p> طلبات </p></Link>
           <Link to="/shipping"><p> الشحن </p></Link>
           <Link to="/clients"><p> العملاء </p></Link>
           <Link to="/copones"><p> كبونات </p></Link>
           <Link to="/static"><p> صفحات ثابتة </p></Link>
           <Link to="/complain"><p> شكاوي واقتراحات </p></Link>
           <Link to="/back"><p> طلبات استرجاع </p></Link>
           <Link to="/slide"><p> slider img </p></Link>
           <Link to="/newbadr"><p> new in badr </p></Link>
           <Link to="/school"><p> المدارس </p></Link>
           <Link to="/university"><p> الجامعات </p></Link>
           <Link to="/craft"><p> craft </p></Link>
           <Link to="/footer"><p> footer url </p></Link>
           <Link to="/warrant"><p> عضو بصلاحية </p></Link>
         </Col>
     </Row>
    </>
  )
}

export default Navb