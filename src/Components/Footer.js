import React , {useState} from 'react'
import { Col , Row ,Modal , Button , Table } from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Footer = () => {

  const [EditModal, setEditModal] = useState(false);

  const handleCreateModalClose = () => {
    setEditModal(false);
  };

  const EditProduct = () =>{
    setEditModal(true);
  }


  return (
    <>

<Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">نوع</p>
          <input type="text"/>
          
          <p className="labe">url عربى</p>
          <input type="text"/>

          <p className="labe">url انجليزى</p>
          <input type="text"/>

          <p className="labe">وصف بالانجليزية</p>
          <input type="text"/>

          <p className="labe">وصف بالعربية</p>
          <input type="text"/>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            تعديل
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
              <p className='par'> Footer Url </p>
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
      <th>  النوع      </th>
      <th> url بالانجليزى </th>
      <th>الاسم بالانجليزى </th>
      <th>url بالعربى </th>
      <th> الاسم بالعربية </th>
      <th>اظهار </th>
      <th>التعديل</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Contact us	</td>
      <td>https://badrstores.com/help/page=20		</td>
      <th>Customer Service	</th>
      <th>https://badrstores.com/help/page=21	</th>
      <th>خدمة العملاء	</th>
      <td><button className='trans'>x</button></td>
      <td><button className='trans' onClick={EditProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></td>
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

export default Footer