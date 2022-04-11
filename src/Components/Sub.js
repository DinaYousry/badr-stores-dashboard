import React ,{useEffect, useState} from 'react'
import { Col , Row , Modal , Button , Table } from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'
import Pagination from './Pagination'
const {
  GetInfo,
  EditInfo,
  AddInfo,
  DeleteInfo,
} = require("../Services/Services");


const Sub = () => {

  const [CreateModal, setCreateModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [AddFeatureModal, setAddFeatureModal] = useState(false);
  // const [AddThingsModal, setAddThingsModal] = useState(false);
  const [AddProductModal, setAddProductModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);


  const handleCreateModalClose = () => {
    setCreateModal(false);
    setEditModal(false);
    setAddFeatureModal(false);
    // setAddThingsModal(false);
    setAddProductModal(false);
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

  // const AddThings = () =>{
  //   setAddThingsModal(true);
  // }

  const AddProduct = () =>{
    setAddProductModal(true);
  }

  const DeleteProduct = () =>{
    setDeleteModal(true);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =data.slice(indexOfFirstPost , indexOfLastPost);
  const paginate =(pageNumbers) => setCurrentPage(pageNumbers);

  useEffect( async ()=>{
    let result = await fetch(`http://api.badrstores.net/api/Categories/List?pageNo=${1}&pageSize=${137}`)
    result = await result.json()
    setData(result.Data)
    console.log("data" , data)
}, [])
console.log("data" , data)

  return (
    <>

<Modal show={CreateModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Create </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">التصنيف الرئيسي </p>
          <select  className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
            <option>Pens</option>
            <option>Office Supplies</option>
            <option>Colors</option>
            <option>School & Education Supplies</option>
            <option>Sketches & Paper</option>
            <option>Art & Hobbies</option>
            <option>Gifts</option>
            <option>Toys</option>
          </select>

          <p className="labe">النوع</p>
          <input type="text"/>
          
          <p className="labe">النوع بالعربية</p>
          <input type="text"/>

          <p className="labe">رقم ترتيب</p>
          <input type="text"/>

          <p className="labe">اختر صورة</p>
          <input type="file"/>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            اضافة
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={EditModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">الاسم بالانجليزية</p>
          <input type="text"/>
          
          <p className="labe">الاسم بالعربية</p>
          <input type="text"/>

          <p className="labe">رقم ترتيب</p>
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


      <Modal show={AddFeatureModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>اختر صفة  </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p className="labe">الصفات  </p>
          <select  className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
            <option>Main Material </option>
            <option>Color</option>
            <option>Quantity in Pack</option>
            <option>Paper Holding</option>
            <option>Cover or Retractable</option>
            <option>Ink type</option>
            <option>Refillable</option>
            <option>Tip Material</option>
            <option>Tip Size</option>
            <option>Water-Resistant</option>
            <option>Grip</option>
            <option>Ink Color</option>
            <option>Tip Shape</option>
            <option>Pen Shape</option>
            <option>Brand</option>
            <option>Made in</option>
            <option>Intensity of illumination</option>
            <option>Package size</option>
            <option> Weight</option>
            <option>Paper color</option>
            <option>Number Of Sheets</option>
            <option>Sketch Size</option>
            <option>Diameter</option>
            <option>Lead Grade</option>
            <option> Number Of Holes</option>
            <option>Punch Depth</option>
            <option>Punching Capacity</option>
            <option>Distance Diameter</option>
            <option>Staples Size</option>
            <option>Stapling Depth</option>
            <option>Stapling Types</option>
            <option>Staples Capacity</option>
            <option>Clip Material</option>
            <option>Clippable</option>
            <option>Eraser Attached</option>
            <option>Grip Color</option>
            <option>Grip Material</option>
            <option>Lead Size</option>
            <option>Tip Retractable</option>
            <option>Binding</option>
            <option>Paper Refillable</option>
            <option>Paper Surface</option>
            <option>Sheet Style</option>
            <option>Lead Type</option>
            <option>Ink Characteristics</option>
            <option> Number Of Subjects</option>
            <option>  Size</option>
            <option>Clip Type</option>
            <option>Clip Size</option>
            <option>Pin Size</option>
            <option>Internal Depth</option>
            <option> Length</option>
            <option> Width</option>
            <option>Power</option>
            <option>Number Of Keys</option>
            <option>Number Of Digits</option>
            <option>Type Of Calculator</option>
            <option>Handedness</option>
            <option>Usage</option>
            <option>Zoom Power</option>
            <option>Degree</option>
            <option>Shape</option>
            <option>Thickness</option>
            <option>Number of Zippers</option>
            <option>Grade</option>
          </select>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={AddProductModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>Add Product </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="labe">الاسم </p>
          <input type="text"/>
          
          <p className="labe">الاسم بالعربية</p>
          <input type="text"/>

          <p className="labe">السعر </p>
          <input type="text"/>

          <p className="labe">العدد في المخزن</p>
          <input type="text"/>

          <p className="labe">SKU </p>
          <input type="text"/>

          <p className="labe">UPC </p>
          <input type="text"/>

          <p className="labe">ArtNumber </p>
          <input type="text"/>

          <p className="labe">الوصف </p>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>

          <p className="labe">الوصف بالعربية </p>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>

          <p className="labe">tags </p>
          <input type="text"/>

          <p className="labe">الصور </p>
          <input type="file"/>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="btn btn-block">
            حفظ 
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
              <p className='par'> تصنيف فرعي </p>
          <br/>
          <Button className='btn-block' onClick={CreateNew}>اضافة نوع</Button> <br/> <br/> 

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
          <Table striped bordered hover className='flip'>
  <thead >
    <tr >
      <th>الترتيب </th>
      <th>النوع</th>
      <th>صورة</th>
      <th>النوع بالعربية	</th>
      <th>التصنيف الرئيسي</th>
      <th>تعديل</th>
      <th>اضافة صفه	</th>
      <th>اضافة مجموعة من الصفات	</th>
      <th>اضافة منتج	</th>
      <th>حذف</th>
    </tr>
  </thead>
  <tbody>
    {currentPosts.map((item) => (
    <tr key={item.id}>
    <td ></td>
    <td>{item.categoriesName}		</td>
    <td><img src={'https://badrstores.net/Uploads/'+item.images} width="100 px" height="100 px" alt='img'/></td>
    <td>{item.categoriesNameAr}</td>
    <td>{item.mainCategoriesNameAr}</td>
    <td><button className='trans' onClick={EditProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></td>
    <td><button className='trans' onClick={AddFeature}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button></td>
    <td><button className='trans'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-node-plus" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg></button></td>
    <td><button className='trans' onClick={AddProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
</svg></button></td>
    <td><button className='trans' onClick={DeleteProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button></td>
  </tr>

))}
  </tbody>
</Table></div>

<Pagination
     postsperpage={postsPerPage} totalposts={data.length}
    paginate={paginate} 
    />


          </div>

          </Col>

          <Col lg={1} md={6} xs={12} className=" m-auto direct directt">
          <Navb/>
          </Col>

      </Row>
     
    </>
  )
}

export default Sub