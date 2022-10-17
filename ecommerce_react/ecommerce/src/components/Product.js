import React,{useState,useEffect} from 'react'

const Product = () => {
    const [products,setProduct]=useState();
    const [currentPage,setCurrentPage]=useState(1);
    const[postPerPage]=useState(10);



    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(res=>res.json().then((json=>setProduct(json))))
    },[products]);

    


  return (
    <>
      <h3 className="heading">
            available Products
      </h3>
      <select name="category" >
        <option value="men's clothing">men's clothing</option>
        <option value="jewellery">jewellery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>


      <div>

      </div>
    </>
  )
}

export default Product

