import React ,{useState} from 'react'
import { Row , Col , Table , Button , Modal} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const DetailsCraft = () => {

  const [CreateModal, setCreateModal] = useState(false);
  const [EditModal, setEditModal] = useState(false)
  const [EditIdModal, setEditIdModal] = useState(false)
  const [DeleteModal, setDeleteModal] = useState(false);

    const handleCreateModalClose = () => {
      setCreateModal(false);
      setEditModal(false);
      setDeleteModal(false);
      setEditIdModal(false);
    };
    
    const CreateNew =() =>{
      setCreateModal(true);
    }
    const EditOld =() =>{
      setEditModal(true)
    }

    const EditId =() =>{
      setEditIdModal(true)
    }

    const DeleteProduct = () =>{
      setDeleteModal(true);
    }
    
  return (
    <>

    <Modal show={CreateModal} onHide={handleCreateModalClose}>
            <Modal.Header closeButton className="head">
              <Modal.Title>اضافة مرحلة  </Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p className="labe">المرحلة </p>
              <select  className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
                  <option>--اختار مستوى   --</option>
                  <option>First grade</option>
                  <option>Second grade</option>
                  <option>Third grade</option>
                  <option>Fourth grade</option>
                  <option>Fifth grade</option>
                  <option>Sixth grade</option>
                  <option>Grades 3-5</option>
              </select>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="btn btn-block">
                save
              </Button>
            </Modal.Footer>
          </Modal>
    
    
    
          <Modal show={EditModal} onHide={handleCreateModalClose}>
            <Modal.Header closeButton className="head">
              <Modal.Title>Edit </Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p className="labe">المنتج   </p>
              <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
                  <option value="1054">Metal Punch  2.2 mm -DP- 600</option>
                  <option value="1058">Geometry Set Plastic Bag Containing 1 Ruler 20 cm, 1 Protractor, 1 Set Square 60°/30° Degrees, 1 Set Square 45°/45° Degrees </option>
                  <option value="1062">Lumocolor  Whiteboard Marker With Bullet Tip -set 4 pcs</option>
                  <option value="1063">Whiteboard Marker With Bullet Tip Red</option>
                  <option value="1064">Whiteboard Marker With Bullet Tip Blue</option>
                  <option value="1065">Whiteboard Marker With Bullet Tip Black</option>
                  <option value="1067">Whiteboard Marker With Bullet Tip Green</option>
                  <option value="1068"> Circle Master Compass Metallic Set- 4pcs - Pink </option>
                  <option value="1071">Triangular Fineliner Extra Broad 0.8 Mm - 10 Color</option>
                  <option value="1072">Briliant Colors Triplus Fineliner Pen - 0.3 mm - 36 Color Set</option>
                  <option value="1075">Triplus Color Pens -Metal box of 50 Brilliant Colours - 1.0mm</option>
                  <option value="1076">Aquarell Coloring Pens,48 Colors + Brushes A  Metall Box </option>
                  <option value="1078"> Cardboard Box Containing 48 Oil-Pastels In Assorted Colours</option>
                  <option value="1081">WaterBrush - 4 Brushes: Round fine, Round medium, Round large, Chisel</option>
                  <option value="1082"> Metallic Marker - Set 5 pens</option>
                  <option value="1116">Double-Ended Fabric Pen Set - 12 pcs</option>
                  <option value="1117">Pastels Poly Chromos Set -12 pcs</option>
                  <option value="1118">Pastels Poly Chromos Set -24 pcs</option>
                  <option value="1119">Pitt Graphite Metal Box -19 pcs</option>
                  <option value="1122">Giorgione Artist Fan Brush Set - 3 Pcs</option>
                  <option value="1123"> Artist Brushes - Various Coloring Brushes</option>
                  <option value="1124">Artist Brushes Set - 6 Brushes </option>
                  <option value="1125">Value Pack Brushes set - 6 prushes</option>
                  <option value="1126"> Artist Fan Brush Set - 6 pcs</option>
                  <option value="1127">Professional Filbert Brushes Set - 9 pcs</option>
                  <option value="1128"> Professional Flat Brush Set - 9 Pcs</option>
                  <option value="1129">Giorgione Artist Brushes set -6pcs</option>
                  <option value="1130"> Art Creation Soft Pastels - 12 pcs</option>
              </select>
    
              <p className="labe">العدد </p>
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
    
    
          <Modal show={EditIdModal} onHide={handleCreateModalClose}>
            <Modal.Header closeButton className="head">
              <Modal.Title>اضافة منتجات - اكاديمية جيمس الاسكندريه - الصف الاول  </Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <input type="text"/>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="btn btn-block">
              اضافة
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
                  <p className='par'> المنتجات </p>
              <br/>
              
              <Row>
                <Col lg={6} md={6} xs={6} className="colo" >
                <input type="text" className='inp'/>  ابحث
                </Col>
    
                <Col lg={6} md={6} xs={6} >
                 
                 اظهر <select >
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
          <th>المرحله</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Art & Hobbies</td>
          <td><button className='trans'onClick={DeleteProduct} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg></button></td>
        </tr>
      </tbody>
    </Table></div>
    
    <br/><br/>
                  <p className='par'> المراحل </p>
              <br/>
    
              <Button className='btn-block' onClick={CreateNew} >اضافة مرحلة </Button> <br/> <br/> 
    
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
          <th>  المرحلة</th>
          <th>  المستوى</th>
          <th>  اضافة منتجات</th>
          <th> اضافة منتجات برقم طلب</th>
          <th>اجراءات </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary	</td>
          <td>First grade		</td>
          <td><button className='trans' onClick={EditOld}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
      <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
    </svg></button></td>
          <td><button className='trans' onClick={EditId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
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
    
    <br/> <br/>
    
    
        </>
    
      
  )
}

export default DetailsCraft