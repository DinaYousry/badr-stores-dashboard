import React , {useState} from 'react'
import { Col , Row ,Modal ,Button , Table} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import { Link } from 'react-router-dom'
import Navr from './Navr'

const University = () => {

  const [EditModal, setEditModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false);
  const [AddUniversityModal, setAddUniversityModal] = useState(false);
  const [AddGradeModal, setAddGradeModal] = useState(false);

  const handleCreateModalClose = () => {
    setEditModal(false);
    setDeleteModal(false);
    setAddUniversityModal(false);
    setAddGradeModal(false);
  };

  const EditOld =() =>{
    setEditModal(true)
  }
  const DeleteProduct = () =>{
    setDeleteModal(true);
  }
  const AddUniversity = () =>{
    setAddUniversityModal(true);
  }
  const AddGrade = () =>{
    setAddGradeModal(true);
  }


  return (
    <>

    

<Modal show={AddUniversityModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Add Product </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">Name </p>
          <input type="text"/>
          
          <p className="labe">NameAr</p>
          <input type="text"/>

          <p className="labe">Description </p>
          <input type="text"/>

          <p className="labe">اختر صورة </p>
          <input type="file"/>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            حفظ 
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={AddGradeModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Add Product </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">School </p>
          <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="true">
            <option>Engineering University</option>
            <option>Pharos University</option>
            <option>Arab Academy for Science and Technology</option>
          </select>
          
          <p className="labe">Grade</p>
          <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="true">
            <option>Engineering Preparatory Department</option>
          </select>

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
          <p className="labe">Name</p>
          <input type="text"/>
          
          <p className="labe">NameAr</p>
          <input type="text"/>

          <p className="labe">Description</p>
          <input type="text"/>

          <p className="labe">اختر صورة</p>
          <input type="file"/>

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

          <div className='container-fluid con'>
          <br/><br/>
              <p className='par'> جامعات </p>
          <br/>

          <button className='transs btn-block lini' onClick={AddGrade}>اضافة مرحلة للجامعة</button> &nbsp;	
        <button className='transs btn-block lini' onClick={AddUniversity}>اضافة جامعة  </button> 
        <button className='transs'><Link className='btn-block lin' to="/ustages" >مراحل الجامعة</Link> </button><br/> <br/> 

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
      <th>  الاسم انجليزى</th>
      <th>الاسم </th>
      <th>الوصف</th>
      <th>الشعار</th>
      <th> تفاصيل </th>
      <th>التعديل </th>
      <th>حذف  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GAA Gems Academy Alexandria	</td>
      <td>اكاديمية جيمس الاسكندريه		</td>
      <td>اكاديمية جيمس الاسكندريه		</td>
      <td></td>
      <td> <button className='trans'><Link to="/udetails" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-journal-text" viewBox="0 0 16 16">
  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg></Link> </button>	</td>
      <td><button className='trans' onClick={EditOld}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>	</td>
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

export default University