import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Signup.css"
const Signup =()=>{
   
  let navigate=useNavigate()

    const [data, setdata]=useState({
        email:"",
        password:"",
        cpassword:""
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:"POST",
            url:'https://publish-fullstack-10x-backend.herokuapp.com/signup',
            data:data
        }).then((user)=> {
                window.alert(user.data)
                navigate("/")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return(
    <>
    <div className="container">
        
        <div className="container-2">
          <div className="logo-1">
            FULL STACK APP
          </div>
          <div className="tittle-1">
            Create New Account
          </div>
          <input type="email" placeholder="User Id" className="email-1" onChange={(e)=> {setdata({...data, email: e.target.value})}} ></input>
          <input type="password" placeholder="password" className="form-control" onChange={(e)=> {setdata({...data, password: e.target.value})}}  ></input>
          <input type="password" placeholder="confrim-password" className="confrim-password" id="confrim-password-1" onChange={(e)=> {
                    setdata({...data,cpassword:e.target.value})
                }} ></input>

          <button className="signin-1" onClick={handlesubmit} >Sign in</button>
        </div>
    </div>
    </>
    
  );
}
export default Signup;