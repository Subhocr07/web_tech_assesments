import { useState } from "react";
import axios from "axios";
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
const Login =()=>{
  const navigate=useNavigate()
  const Signup=()=>{
    navigate("/signup")
  }
    const [data, setdata]=useState({
        email:"",
        password:"",
    })

    useEffect(()=> {
        
        const auth=localStorage.getItem('user')
        if (auth) {
            navigate("/dashboard")
        }
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:'POST',
            headers:{
                // auth: localStorage.setItem('user')
            },
            url:"https://contact-manager-server-10x.herokuapp.com/login",
            data:data
        }).then((token)=> {
            console.log('Hello',token.data)
            localStorage.setItem("user",token.data)
            navigate("/dashboard")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return(
    <>
     <div className="container">
        <div className="container-2">
          <div className="logo">
            LOGO
          </div>
          <div className="tittle">
            Enter your credential to access your account
          </div>
          <input type="email" placeholder="User Id" className="email"onChange={(e)=> {setdata({...data, email: e.target.value})}} ></input>
          <input type="password" placeholder="password" className="password" onChange={(e)=> {setdata({...data, password: e.target.value})}} ></input>
          <button className="signin" onClick={handlesubmit}>Sign in</button>
          <a href={"./signup"} className="signup" onClick={Signup}>Sign Up</a>
        </div>
    </div>
    </>
    
  );
}
export default Login;