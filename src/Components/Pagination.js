import React from 'react'

const Pagination = ({ postsperpage , totalposts , paginate}) => {

    const pageNumbers = [];
   
    for(let i =1 ; i<= Math.ceil(totalposts / postsperpage) ; i++){
        pageNumbers.push(i);
    }

  return (
    <nav >
     <ul className='pagination'>
        {pageNumbers.map(number =>(
            <li className='page-item' key={number}>
            <a key={number} onClick={() => paginate(number)}  className='page-link'>{number}</a>
            </li>
             ))}
</ul> 
    </nav>
  )
}

export default Pagination