import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'
import Pagination from './Pagination'
// import axios from 'axios'
import './style.css'


const Product = () => {

    const [products, setProducts] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [postsperpage] = useState(10)
    const [dependancy, setdependancy] = useState("")
    

    // const filter=(arr,dependancy)=>{
    //     if(dependancy!=""){
    //         return
    //     }else{
    //         const newarr=arr.filter(item=>item.category==dependancy)
    //         return newarr
    //     }
    // }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                console.log(json)
            })
            // setProducts(filter(products,dependancy))
        
    },[])

    
    const indexlastpost = currentpage * postsperpage
    const indexoffirstpost = indexlastpost - postsperpage
    const currentposts = products.slice(indexoffirstpost, indexlastpost)
    
    
    
            let handledepend=currentposts.filter(product=>{
                return product.category==dependancy
            })
           
    
    
    console.log(handledepend)
    

    const paginate = (pageNumber) => {
        setcurrentpage(pageNumber)
    }

    const handledependancy = (e) => {
        setdependancy(e.target.value)
        // console.log(dependancy)

    }
    // console.log(dependancy)
    
    return (
        <>
            <h3 className='heading'>
                Available Products
            </h3>

            <select name="categories" onClick={(e) => handledependancy(e)}>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>

            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
                {
                    handledepend.map((item, i) => {
                        
                                return (
                                    <Productcard item={item} key={i} />
                                )
                            }

                        )}

                   

            </div>
            <Pagination postsperpage={postsperpage} totalposts={products.length} paginate={paginate} />
        </>
    )
}

export default Product