import React from 'react'
import { Col , Row , Table  } from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const New = () => {
  return (
    <>
      <Header/>
      <br/>
      <div className='naviii'>
        <Navr/>
      </div>
      <Row>
          <Col lg={11} md={6} xs={12} className=" m-auto direct">

          <div className='container-fluid con'>
          <br/><br/>
              <p className='par'> طلبات جديدة </p>
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
      <th>رقم الطلب	 </th>
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
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
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

export default New