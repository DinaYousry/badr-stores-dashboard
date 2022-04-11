import React from 'react'
import { Navbar , Container , Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navr = () => {
  return (
    <>
                      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to="/"> قائمة البرنامج</Link></Nav.Link>
        <Nav.Link ><Link to="/main"> تصنيفات رئيسية</Link></Nav.Link>
        <Nav.Link><Link  to="/sub">تصنيف فرعي</Link></Nav.Link>
        <Nav.Link ><Link to="/general">صفات عامة</Link></Nav.Link>
        <Nav.Link ><Link to="/product">المنتجات</Link></Nav.Link>
        <Nav.Link ><Link to="/new">طلبات جديدة</Link></Nav.Link>
        <Nav.Link ><Link to="/old">طلبات</Link></Nav.Link>
        <Nav.Link ><Link to="/shipping">الشحن</Link></Nav.Link>
        <Nav.Link ><Link to="/clients">العملاء</Link></Nav.Link>
        <Nav.Link ><Link to="/copones">كبونات</Link></Nav.Link>
        <Nav.Link ><Link to="/static">صفحات ثابتة</Link></Nav.Link>
        <Nav.Link ><Link to="/complain">شكاوي واقتراحات</Link></Nav.Link>
        <Nav.Link ><Link to="/back">طلبات استرجاع</Link></Nav.Link>
        <Nav.Link ><Link to="/slide">slider img</Link></Nav.Link>
        <Nav.Link ><Link to="/newbadr">new in badr</Link></Nav.Link>
        <Nav.Link ><Link to="/school">المدارس</Link></Nav.Link>
        <Nav.Link ><Link to="/university">الجامعات</Link></Nav.Link>
        <Nav.Link ><Link to="/craft">craft</Link></Nav.Link>
        <Nav.Link ><Link to="/footer">footer url</Link></Nav.Link>
        <Nav.Link ><Link to="/warrant">عضو بصلاحية</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar><br/>

    </>
  )
}

export default Navr