import React ,{useState} from 'react'
import { Button, Col , Row , Table ,Modal} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'


const Main = () => {

  const [CreateModal, setCreateModal] = useState(false);
const [EditModal, setEditModal] = useState(false)

  const handleCreateModalClose = () => {
    setCreateModal(false);
    setEditModal(false);
  };
  
  const CreateNew =() =>{
    setCreateModal(true);
  }
  const EditOld =() =>{
    setEditModal(true)
  }

  return (
    <>

<Modal show={CreateModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Create </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">name </p>
          <input
            type="text"
          />

          <p className="labe">name in arabic</p>
          <input
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            Create
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">الاسم  </p>
          <input
            type="text"
          />

          <p className="labe">الاسم بالعربية </p>
          <input
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            حفظ التغييرات
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

          <div className='container-fluid con' >
          <br/><br/>
              <p className='par'> تصنيفات رئيسية </p>
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
      <th>الاسم بالعربية</th>
      <th>التعديل</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Art & Hobbies</td>
      <td>الرسم والهوايات	</td>
      <td><Button className='btn-block' onClick={EditOld}>تعديل</Button></td>
    </tr>
    <tr>
      <td>Colors</td>
      <td>الالوان	</td>
      <td><Button className='btn-block'onClick={EditOld}>تعديل</Button></td>
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

export default Main