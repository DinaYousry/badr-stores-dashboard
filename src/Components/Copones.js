import React , {useState} from 'react'
import { Col , Row ,Button, Modal , Table } from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Copones = () => {

  const [CreateModal, setCreateModal] = useState(false);
  const [EditModal, setEditModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false);

  const handleCreateModalClose = () => {
    setDeleteModal(false);
    setEditModal(false);
    setCreateModal(false);
  };
  
  const DeleteProduct = () =>{
    setDeleteModal(true);
  }
  const EditOld =() =>{
    setEditModal(true)
  }
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
        <p className="labe">اسم كوبون </p>
          <input
            type="text"
          />

          <p className="labe">كود</p>
          <input
             type="text"
             />
           <Button className='btn-block' >توليد كود عشوائي</Button>

          <p className="labe">نسبة الخصم</p>
          <input
             type="text"
             />

          <p className="labe">الحد الادنى الاجمالى الطلب</p>
          <input
             type="text"
             />

          <p className="labe">تاريخ البداية</p>
          <input
             type="date"
             />

          <p className="labe">تاريخ النهاية</p>
          <input
             type="date"
             />

          <p className="labe">استخدام مرة واحده</p>
          <input
             type="checkbox"
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
        <p className="labe">اسم كوبون </p>
          <input
            type="text"
          />

          <p className="labe">كود</p>
          <input
             type="text"
             />

          <p className="labe">نسبة الخصم</p>
          <input
             type="text"
             />

          <p className="labe">الحد الادنى الاجمالى الطلب</p>
          <input
             type="text"
             />

          <p className="labe">تاريخ البداية</p>
          <input
             type="date"
             />

          <p className="labe">تاريخ النهاية</p>
          <input
             type="date"
             />

          <p className="labe">استخدام مرة واحده</p>
          <input
             type="checkbox"
             />

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            save
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
              <p className='par'> كوبونات </p>
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
      <th>م </th>
      <th>الاسم</th>
      <th>الكود</th>
      <th>نسبة الخصم	 </th>
      <th>تاريخ البداية	 </th>
      <th>تاريخ النهاية	 </th>
      <th>مرات الاستخدام	 </th>
      <th>طالب </th>
      <th>فعال </th>
      <th>استخدام مرة واحده	 </th>
      <th>تعديل </th>
      <th>اخفاء </th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>36 </td>
    <td>youssefmohamedyounes2008@gmail.com	 </td>
    <td>youssefmohamedyounes2008@gmail.com_a1a0	 </td>
    <td>5 </td>
    <td>2022-02-10	 </td>
    <td>2023-02-10	 </td>
    <td>0 </td>
    <td>email: youssefmohamedyounes2008@gmail.com College:Faculty of Fine Arts	 </td>
    <td><button className='trans'>x </button></td>
    <td><button className='trans'>x </button></td>
    <td><button className='trans' onClick={EditOld}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
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

export default Copones