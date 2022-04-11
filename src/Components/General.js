import React , {useState} from 'react'
import { Col , Row , Button , Table ,Modal } from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const General = () => {

  const [CreateModal, setCreateModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [AddFeatureModal, setAddFeatureModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);


  const handleCreateModalClose = () => {
    setCreateModal(false);
    setEditModal(false);
    setAddFeatureModal(false);
    setDeleteModal(false);
  };

  const CreateNew =() =>{
    setCreateModal(true);
  }

  const EditProduct = () =>{
    setEditModal(true);
  }

  const AddFeature = () =>{
    setAddFeatureModal(true);
  }

  const DeleteProduct = () =>{
    setDeleteModal(true);
  }


  return (
    <>

<Modal show={CreateModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">اسم الصفة  </p>
          <input
            type="text"
          />

          <p className="labe">اسم الصفة بالعربية </p>
          <input
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            انشاء
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={AddFeatureModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>اضافة تصنيف قيمة</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">قيمة   </p>
          <input
            type="text"
          />

          <p className="labe">قيمة بالعربية </p>
          <input
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">اسم الصفة  </p>
          <input
            type="text"
          />

          <p className="labe">اسم الصفة بالعربية </p>
          <input
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            حفظ التعديلات
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={DeleteModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Are you sure you want to delete this ? </Modal.Title>
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

              <p className='par'> الصفات العامة </p>
              
          <br/>
          <Button className='btn-block' onClick={CreateNew}>اضافة صفة</Button> <br/> <br/> 

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
      <th>الصفات </th>
      <th>الصفات بالعربية	</th>
      <th>اضافة قيمة	</th>
      <th>تعديل	</th>
      <th>قيم متعدده	</th>
      <th>اضهار فى الالوان</th>
      <th>حذف	</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Main Material	</td>
      <td>مادة الصنع			</td>
      <td><button className='trans' onClick={AddFeature} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button></td>
<td><button className='trans' onClick={EditProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></td>
      <td><button className='trans'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-node-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg></button></td>
      <td><button className='trans' > x </button></td>
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

export default General