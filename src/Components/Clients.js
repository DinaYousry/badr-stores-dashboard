import React , {useState}from 'react'
import { Col , Row , Button , Table , Modal ,Card} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Clients = () => {

  const [EditModal, setEditModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false);

  const handleCreateModalClose = () => {
    setDeleteModal(false);
    setEditModal(false);
  };
  
  const DeleteProduct = () =>{
    setDeleteModal(true);
  }
  const EditOld =() =>{
    setEditModal(true)
  }


  return (
    <>

<Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <h3 style={{textAlign:"right" , color:"#1a2d4c"}}>طلبات العميل  </h3>
<Row>
  <Col className='pt-3'>
  <Card className='cardy2'>
  <Card.Body>
  عدد الطلبات
  2
  </Card.Body>
</Card>
  </Col>
  <Col className='pt-3'>
  <Card className='cardy2'>
  <Card.Body>
  اجمالى المشتريات
  208
  </Card.Body>
</Card>

  </Col>
</Row>
<br/>
<div style={{overflowX:"scroll", alignItems:"center"}}>
          <Table striped bordered hover className='flip' >
  <thead >
    <tr >
      <th>رقم الطلب </th>
      <th> عدد القطع</th>
      <th> التاريخ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2222	</td>
      <td>4		</td>
      <td>22-02-2022	</td>
    </tr>
  </tbody>
</Table></div>

        </Modal.Body>
      </Modal>


<Modal show={DeleteModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Are you sure you want to delete this product ? </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="btn btn-block">
            Delete
          </Button>
          <Button variant="btn btn-block">
           Cancel
          </Button>
        </Modal.Footer>
      </Modal>




      <Header/>
      <br/>
      <div className='naviii'>
        <Navr/>
      </div>
      <Row>
          <Col lg={11} md={6} xs={12} className=" m-auto direct">

          <div className='container-fluid con'>
          <br/><br/>
              <p className='par'> العملاء </p>
          <br/>

          <Row>
            <Col lg={6} md={6} xs={6} className="colo" >
            <input type="text" className='inp'/>  ابحث
            </Col>

            <Col lg={6} md={6} xs={6} >
             
             اظهر <select>
               <option>10</option>
               <option>25</option>
               <option>50</option>
               </select> مدخلات
               
            </Col>
          </Row>
          <br/>
           <div style={{overflowX:"scroll"}}>
          <Table striped bordered hover className='flip'>
  <thead >
    <tr >
      <th>الاسم </th>
      <th> الايميل</th>
      <th> رقم الهاتف</th>
      <th> عدد الطلبات</th>
      <th> تاريخ التسجيل</th>
      <th> تفاصيل</th>
      <th> ايقاف الحساب</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nourhansamir063@gmail.com	</td>
      <td>nourhansamir063@gmail.com		</td>
      <td>01010255478	</td>
      <td>2	</td>
      <td>2022-02-19		</td>
      <td><button className='trans' onClick={EditOld}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-journal-text" viewBox="0 0 16 16">
  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg></button></td>
      <td><button className='trans' onClick={DeleteProduct}>x</button></td>
    </tr>
  </tbody>
</Table></div>


          </div>

          </Col>

          <Col lg={1} md={6} xs={12} className=" m-auto direct directt">
          <Navb/>
          </Col>

      </Row>
     
    </>
  )
}

export default Clients