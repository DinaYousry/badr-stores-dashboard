import React from 'react'
import { Col , Row , Table} from 'react-bootstrap'
import Navb from './Navb'
import Header from './Header'
import Navr from './Navr'

const Back = () => {
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
              <p className='par'> طلبات استرجاع </p>
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
      <th>ر- طلب شراء	 </th>
      <th>ر- طلب استرجاع	</th>
      <th> البريد الالكترونى	</th>
      <th>رقم الهاتف	</th>
      <th> تاريخ طلب الشراء	</th>
      <th> تاريخ طلب الاسترجاع	</th>
      <th> اجمالى عدد القطع فى طلب شراء	</th>
      <th> اجمالى عدد القطع فى طلب الاسترجاع	</th>
      <th> اجمالى الفاتورة	</th>
      <th> عنوان طلب الاسترجاع</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>	</td>
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

export default Back