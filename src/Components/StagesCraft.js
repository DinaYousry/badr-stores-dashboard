import React ,{useState} from 'react'
import { Button, Col , Row , Table ,Modal} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const StagesCraft = () => {
  
  const [CreateStagesModal, setCreateStagesModal] = useState(false);
  const [CreateLevelModal, setCreateLevelModal] = useState(false);
  const [EditModal, setEditModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false);

    const handleCreateModalClose = () => {
      setCreateLevelModal(false);
      setCreateStagesModal(false);
      setEditModal(false);
      setDeleteModal(false);
  };
    
    const CreateStage =() =>{
      setCreateStagesModal(true);
    }
    const CreateLevel =() =>{
      setCreateLevelModal(true);
    }
    const EditOld =() =>{
      setEditModal(true)
    }    
    const DeleteProduct = () =>{
      setDeleteModal(true);
    }
  
  return (
    <>
        
        <Modal show={CreateStagesModal} onHide={handleCreateModalClose}>
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
            type="text"
            />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            Create
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={CreateLevelModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Create </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">الاسم بالانجليزية </p>
          <input
            type="text"
          />

          <p className="labe">الاسم </p>
          <input
            type="text"
          />

           <p className="labe">المرحلة </p>
          <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
              <option>engraving</option>
              <option>Sculpture</option>
              <option>design</option>
          </select>

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
          <p className="labe">Name</p>
          <input type="text"/>
          
          <p className="labe">NameAr</p>
          <input type="text"/>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            تعديل
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

          <div className='container-fluid con' >
          <br/><br/>
              <p className='par'> المراحل  </p>
          <br/>

          <Button className='btn-block' onClick={CreateLevel}>اضافة ادوات نشاط</Button> 
          <Button className='btn-block' onClick={CreateStage}> اضافة</Button> <br/> <br/> 

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
      <th>تعديل</th>
      <th>حذف</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>engraving</td>
      <td>حفر	</td>
      <td><button className='trans' onClick={EditOld}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></td>
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

export default StagesCraft