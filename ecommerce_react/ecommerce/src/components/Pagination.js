import React from 'react'

const Pagination = (props) => {
    const pagenumbers=[]

    
        for(let i=1;i<=Math.ceil(props.totalposts/props.postsperpage);i++){
            pagenumbers.push(i)
        }
        // console.log(pagenumbers)
    
  return (
    <>
    <ul className='pagination'>
    
        {pagenumbers.map((number)=>{
           
           return(
            
                <a  onClick={()=>props.paginate(number)} href='!#' className='pagelink'>
                <li>
                  {number}  
                  </li>
                </a>
                
           )
        })}
    </ul>
    </>
  )
}

export default Pagination