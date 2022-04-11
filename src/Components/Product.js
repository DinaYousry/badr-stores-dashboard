import React ,{useState} from 'react'
import { Col , Row ,Button , Modal , Table} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Product = () => {

  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);
  const [CopyModal, setCopyModal] = useState(false);

  const handleCreateModalClose = () => {
    setEditModal(false);
    setDeleteModal(false);
    setCopyModal(false);
  };

  const EditProduct = () =>{
    setEditModal(true);
  }

  const DeleteProduct = () =>{
    setDeleteModal(true);
  }
  const CopyProduct = () =>{
    setCopyModal(true);
  }

  return (
    <>

<Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">التصنيف</p>
          <input type="text"/>
          
          <p className="labe">الاسم</p>
          <input type="text"/>

          <p className="labe">الاسم بالانجليزية</p>
          <input type="text"/>

          <p className="labe">السعر </p>
          <input type="text"/>

          <p className="labe">العدد </p>
          <input type="text"/>

          <p className="labe">ArtNumber </p>
          <input type="text"/>

          <p className="labe">كود ربط المنتج </p>
          <input type="text"/>

          <p className="labe">وصف </p>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>

          <p className="labe">الوصف بالعربية </p>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>

          <p className="labe">SKU </p>
          <input type="text"/>

          <p className="labe">UPC </p>
          <input type="text"/>

          <p className="labe">TrendingItem </p>
           <select  className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">NewArrivals </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">BestSale </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">TrendingItem </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">GroupA </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">GroupB </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">GroupC </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

               <p className="labe">GroupD </p>
           <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
               <option>Not set</option>
               <option>true</option>
               <option>false</option>
               </select> 

          <p className="labe">tags </p>
          <input type="text"/>

          <p className="labe">اختر صورة </p>
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

      <Modal show={CopyModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Do you want to Copy this product ? </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="btn btn-block">
            yes
          </Button>
          <Button variant="btn btn-block">
           no
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
              <p className='par'> منتجات </p>
          <br/>
        <Button className='btn-block' >export xsl</Button> <br/> <br/> 

          <Row>
            <Col lg={6} md={6} xs={6} className="colo" >
            <input type="text" className='inp'/>  ابحث
            </Col>

            <Col lg={6} md={6} xs={6} >
             
              <select>
               <option>10</option>
               <option>25</option>
               <option>50</option>
               </select> اظهر
               
            </Col>
          </Row>
          <br/> 
          <div style={{overflowX:"scroll"}}>
          <Table striped bordered hover className='table-sm flip'>
  <thead >
    <tr >
      <th>SKU  </th>
      <th> UPC </th>
      <th> Brand </th>
      <th> Product Id	</th>
      <th>ProductName</th>
      <th>Categories Name</th>
      <th>Price	</th>
      <th>InStock	</th>
      <th>Edit	</th>
      <th>Deleted</th>
      <th>Copy Product</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>24665</td>
      <td>6933631504804</td>
      <td>M&G	</td>
      <td>6328</td>
      <td>Pack of Stapler+Staples 24/6+Staples Remover	</td>
      <td>Office sets	</td>
      <td>55</td>
      <td>1</td>
      <td><button className='trans' onClick={EditProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></td>
      <td><button className='trans' onClick={DeleteProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button></td>
      <td><button className='trans' onClick={CopyProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button></td>
    </tr>
  </tbody>
</Table>
</div>

          </div>

          </Col>

          <Col lg={1} md={6} xs={12} className=" m-auto direct directt">
          <Navb/>
          </Col>

      </Row>
     
    </>
  )
}

export default Product