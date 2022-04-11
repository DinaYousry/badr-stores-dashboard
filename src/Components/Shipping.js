import React , {useState} from 'react'
import { Col , Row , Modal ,Button , Table} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Shipping = () => {

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
          <p className="labe">Governorate </p>
          <input
            type="text"
          />

          <p className="labe">GovernorateAr</p>
          <input
            type="text"
            />

         <p className="labe">Days</p>
          <input
            type="text"
            />

         <p className="labe">Price</p>
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


      <Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p className="labe">Governorate </p>
          <input
            type="text"
          />

          <p className="labe">GovernorateAr</p>
          <input
            type="text"
            />

         <p className="labe">Days</p>
          <input
            type="text"
            />

         <p className="labe">Price</p>
          <input
             type="text"
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

          <div className='container-fluid con'>
          <br/><br/>
              <p className='par'> الشحن </p>
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
      <th>  المحافظة </th>
      <th>  المحافظة بالانجليزية </th>
      <th>الايام </th>
      <th>السعر </th>
      <th>اجراءات </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alexandria</td>
      <td>الاسكندرية</td>
      <td>1</td>
      <td>25	</td>
      <td><button className='trans' onClick={EditOld} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
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

export default Shipping