import React ,{useState} from 'react'
import { Col , Row ,Button , Table , Modal } from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const NewBadr = () => {

  const [CreateModal, setCreateModal] = useState(false);

  const handleCreateModalClose = () => {
    setCreateModal(false);
  };
  
  const CreateNew =() =>{
    setCreateModal(true);
  }

  return (
    <>

<Modal show={CreateModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Create </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p className="labe">URL </p>
          <input
            type="text"
          />

          <p className="labe">الاسم </p>
          <input
            type="text"
          />

          <p className="labe">الاسم بالعربية </p>
          <input
            type="text"
          />

          <p className="labe">NewBadr </p>
          <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
            <option>Notset</option>
            <option>true</option>
            <option>false</option>
          </select>

          <p className="labe">اختر صورة </p>
          <input
            type="file"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            Create
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
              <p className='par'> new in badr </p>
          <br/>

          <Button className='btn-block' onClick={CreateNew}>+ اضافة</Button> <br/> <br/> 

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
      <th>الصورة</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Art & Hobbies	</td>
      <td>	</td>
      <td>https://badrstores.com/products?mcid=14&mcName=Art%20&%20Hobbies&mcaName=%D8%A7%D9%84%D8%B1%D8%B3%D9%85%20%D9%88%D8%A7%D9%84%D9%87%D9%88%D8%A7%D9%8A%D8%A7%D8%AA		</td>
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

export default NewBadr