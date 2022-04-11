import React , {useState} from 'react'
import {Table , Button } from 'react-bootstrap'

const Test = () => {

  const [test, setTest] = useState(false);

const testy=()=>{
  if (test === true) {setTest (false)}
  else setTest(true );
}
function isBolean(test) {
  if (test === true) return true;
  else return false;
}

  return (
    <div style={{backgroundColor:"white"}}>
          <Table striped bordered hover className='flip'>
  <thead >
    <tr >
      <th>+</th>
      <th>الاسم </th>
      <th>الاسم بالعربية</th>
      <th>التعديل</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><Button className='btn-block' onClick={testy} >+</Button></td>
      <td>Art & Hobbies</td>
      <td>الرسم والهوايات	</td>
      <td><Button className='btn-block' >تعديل</Button></td>
    </tr>
    <tr className={isBolean(test) ? "test1" : "test2"}>
      <td >Art & Hobbies</td>
      <td >الرسم والهوايات	</td>
      <td >Art & Hobbies</td>
      <td >الرسم والهوايات	</td>  
    </tr> 
  </tbody>
</Table>
    </div>
  )
}

export default Test