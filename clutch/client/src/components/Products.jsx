import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import ProductCard from "./Productcard";
import "./style.css";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const token = localStorage.getItem("authorization");
  if (token === null) {
    localStorage.setItem("authorization", "");
  } else if (token.length > 0) {
  }

  const history = useNavigate();
  const handleroute = () => {
    history("/add");
  };


  
  const handledependancy = (e) => {
    setCategory(e.target.value);
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3032/product/all", {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(...data.orders)
        // setOrderHistory(data.orders);
        setProducts(data);
      });
  }, [token]);




  let handledepend = products.filter((product) => {
    return product.category === category;
  });
  // console.log(products)
  return (
    <>
      <div className="background-color">
        <div className="top-bar">
          <h3 className="heading">Available Products</h3>

          <select name="categories" onClick={(e) => handledependancy(e)}>
            <option value="men">Men</option>
            <option value="jewellary">Jewellery</option>
            <option value="mobile">Mobile</option>
            <option value="women">women</option>
          </select>
          <input
            type="text"
            className="search-box"
            placeholder="Search.."
            onChange={(e) => {
              handleFilter(e);
            }}
          ></input>
          <Logout />
        </div>
        <div>
          <div className="products-conatiner">
            {handledepend
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, key) => {
                return (
                  <>
                    <ProductCard element={item} key={key} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
