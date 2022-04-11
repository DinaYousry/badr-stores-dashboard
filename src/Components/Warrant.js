import React ,{useState} from 'react'
import { Col , Row , Button , Modal ,Table} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Warrant = () => {

  const [CreateModal, setCreateModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  const handleCreateModalClose = () => {
    setCreateModal(false);
    setDeleteModal(false);
  };
  const CreateNew =() =>{
    setCreateModal(true);
  }
  const DeleteProduct = () =>{
    setDeleteModal(true);
  }


  return (
    <>

<Modal show={CreateModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Register </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">Email </p>
          <input
            type="text"
          />

          <p className="labe">UserName </p>
          <input
            type="text"
          />

          <p className="labe">Password </p>
          <input
            type="text"
          />

          <p className="labe">Confirm password </p>
          <input
            type="text"
          />
          
          <p className="labe">Confirm password </p>
          <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
            <option>admin</option>
            <option>customers</option>
            <option>goods</option>
            <option>site administration</option>
          </select>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            Register
          </Button>
        </Modal.Footer>
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
              <p className='par'> عضو بصلاحية  </p>
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
      <th>الصلاحية</th>
      <th>تعديل</th>
      <th>حذف</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>admin@admin.com	</td>
      <td>Admin	</td>
      <th></th>
      <td><button className='trans' onClick={DeleteProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
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

export default Warrant