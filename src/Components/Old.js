import React , {useState} from 'react'
import { Col , Row , Button , Modal , Table , Dropdown , Card} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Old = () => {

  const [StatusModal, setStatusModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  const handleCreateModalClose = () => {
    setStatusModal(false);
    setFullscreen(false);
    setShow(false);
    setDeleteModal(false);
  };

  const Status =() =>{
    setStatusModal(true);
  }
  const DeleteProduct = () =>{
    setDeleteModal(true);
  }

  return (
    <>

<Modal show={StatusModal} onHide={handleCreateModalClose}>
        <Modal.Header closeButton className="head">
          <Modal.Title>choose status </Modal.Title>
        </Modal.Header>
 
        <Modal.Body>
        <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" style={{color:"black"}}>
                اختر حالة الطلب
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop">
                <Dropdown.Item className="drpdown">تم الاستلام</Dropdown.Item>
                <Dropdown.Item className="drpdown">  جاري التجهيز</Dropdown.Item>
                <Dropdown.Item className="drpdown">  جاري التوصيل</Dropdown.Item>
                <Dropdown.Item className="drpdown">  تم التسليم</Dropdown.Item>
                <Dropdown.Item className="drpdown">  تم اغلاق الارجاع</Dropdown.Item>
                <Dropdown.Item className="drpdown">  طلب الارجاع</Dropdown.Item>
                <Dropdown.Item className="drpdown">  لايمكن الاسترجاع</Dropdown.Item>
                <Dropdown.Item className="drpdown">تمت الموافقة ع الارجاع</Dropdown.Item>
                <Dropdown.Item className="drpdown">  تم الالغاء</Dropdown.Item>
              </Dropdown.Menu>
             </Dropdown>
<br/>
<p className="labe">اختر حالة الطلب </p>
          <select className="form-control select2me valid" id="ItemsId" name="[0].FK_ProductId" aria-invalid="false">
            <option>تم الاستلام</option>
            <option>جاري التجهيز</option>
            <option>جاري التوصيل</option>
            <option>تم التسليم</option>
            <option>تم اغلاق الارجاع</option>
            <option>طلب الارجاع</option>
            <option>لايمكن الاسترجاع</option>
            <option>تمت الموافقة ع الارجاع</option>
            <option>تم الالغاء</option>
          </select>

        </Modal.Body>
<br/>
        <Modal.Footer>
          <Button variant="btn btn-block">
            Save
          </Button>
        </Modal.Footer>
      </Modal>

          
      <Modal show={show} fullscreen={fullscreen} onHide={handleCreateModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br/> <p style={{textAlign:"right"}}>Order: 1371 | 2022-02-19</p>
          <h3 style={{textAlign:"right"}}>تفاصيل الطلب </h3><br/>
        <Row xs={1} md={2} lg={3} className="g-4 flip" >
    <Col>
      <Card>
        <Card.Body>
          <Card.Title style={{ backgroundColor :"gray" , padding:"10px" , fontSize : "22px"}}>المنتجات</Card.Title>
          <Table borderless	style={{textAlign:"right" , fontWeight: "500" }}>
              <tbody>
                 <tr>
                    <td>رقم طلب #:</td>
                    <td>1371</td>
                  </tr>
                  <tr>
                    <td>تاريخ الطلب:</td>
                    <td>2022-02-19</td>
                  </tr>
                  <tr>
                    <td>الحاله:</td>
                    <td>تم التسليم</td>
                  </tr>
                  <tr>
                    <td>الاجمالى قبل الخصم:</td>
                    <td>120.00</td>
                  </tr>
                  <tr>
                    <td>الخصم:</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>الكبون:</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>الاجمالى بعدالخصم:</td>
                    <td>120.00</td>
                  </tr>
                  <tr>
                    <td>تكلفة الشحن:</td>
                    <td>25.00</td>
                  </tr>
                  <tr>
                    <td>الاجمالى:</td>
                    <td>145.00</td>
                  </tr>
             </tbody>
         </Table>

        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title style={{ backgroundColor :"gray" , padding:"10px" , fontSize : "22px"}}>العميل </Card.Title>
          <Table borderless	style={{textAlign:"right" , fontWeight: "500" }}>
              <tbody>
                 <tr>
                    <td>الاسم:</td>
                    <td>nourhansamir063@gmail.com</td>
                  </tr>
                  <tr>
                    <td>البريد الالكترونى:</td>
                    <td>nourhansamir063@gmail.com</td>
                  </tr>
                  <tr>
                    <td>رقم الهاتف:</td>
                    <td>01276833769</td>
                  </tr>
                  <tr>
                    <td>رقم الهاتف المسجل :</td>
                    <td></td>
                  </tr>
             </tbody>
         </Table>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title style={{ backgroundColor :"gray" , padding:"10px" , fontSize : "22px"}}>الشحن</Card.Title>
          <Table borderless	style={{textAlign:"right" , fontWeight: "500" }}>
              <tbody>
                 <tr>
                    <td>المحافظة:</td>
                    <td>Alexandria</td>
                  </tr>
                  <tr>
                    <td>العنوان:</td>
                    <td>Agamy aboyoussef Infront of meraag pharmacy</td>
                  </tr>
                  <tr>
                    <td>ايام الشحن:</td>
                    <td>1</td>
                  </tr>
             </tbody>
         </Table>
        </Card.Body>
      </Card>
    </Col>
</Row>
<br/>
<h3 style={{textAlign:"right"}}>تفاصيل الطلب </h3><br/>
<div style={{overflowX:"scroll"}}>
          <Table striped bordered hover className='flip'>
  <thead >
    <tr >
      <th>الاسم </th>
      <th> artNumber </th>
      <th> SUK </th>
      <th> UPC </th>
      <th> السعر </th>
      <th> عدد القطع </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Blacklead Pencils With Erasers Tip 2112- B -Set 12 pens	</td>
      <td>2112	</td>
      <td>0018191	</td>
      <td>8681241073446	</td>
      <td>36	</td>
      <td>1	</td>
    </tr>
  </tbody>
</Table></div>
<br/>
<h3 style={{textAlign:"right"}}>طلبات العميل  </h3><br/>
<Row>
  <Col className='pt-3'>
  <Card className='cardy'>
  <Card.Body>
  عدد الطلبات
  2
  </Card.Body>
</Card>
  </Col>
  <Col className='pt-3'>
  <Card className='cardy'>
  <Card.Body>
  اجمالى المشتريات
  208
  </Card.Body>
</Card>

  </Col>
</Row>
<div style={{overflowX:"scroll"}}>
          <Table striped bordered hover className='flip'>
  <thead >
    <tr >
      <th>رقم الطلب </th>
      <th> عدد القطع  </th>
      <th> التاريخ </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1370</td>
      <td>12	</td>
      <td>2022-02-19	</td>
    </tr>
  </tbody>
</Table></div>

        </Modal.Body>
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
              <p className='par'> طلبات  </p>
          <br/>
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
      <th>رقم الطلب		 </th>
      <th>اسم العميل	</th>
      <th>البريد الالكترونى</th>
      <th>رقم العميل</th>
      <th>تاريخ</th>
      <th>عدد القطع	</th>
      <th>الشحن</th>
      <th>الاجمالى قبل الخصم	</th>
      <th>الاجمالى بعد الخصم	</th>
      <th>الاجمالى المطلوب دفعه	</th>
      <th>الحاله</th>
      <th>تفاصيل</th>
      <th>اخفاء</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1371</td>
      <td>nourhansamir063@gmail.com	</td>
      <td>nourhansamir063@gmail.com	</td>
      <td>01276833769	</td>
      <td>2022-02-19	</td>
      <td>8</td>
      <td>25</td>
      <td>120</td>
      <td>120</td>
      <td>145</td>
      <td><Button  className='btn-block' onClick={Status}>تم التسليم</Button></td>
      <td><button className='trans' onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-journal-text" viewBox="0 0 16 16">
  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
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

export default Old