import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Signin() {
    const [credentials, setcredentials]=useState({email:"",password:""});

    const handlesubmit= async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/login",{
          method:'POST',
          headers:{
            'Content-type':'Application/json'
          },
          body:JSON.stringify({
            email:credentials.email,
            password:credentials.password,
          })
      })
      const json = await response.json();
      console.log(json);
  
      if(!json.success){
        alert("Enter valid credentials");
      }
    }
    const change=(event)=>[
      setcredentials({...credentials,[event.target.name]:event.target.value})
    ]
    return (
      <div>
        <div className="signupmain container">
          <h2>Sign In | Food App</h2>
          <br />
          <br />
              <form onSubmit={handlesubmit}>
                  <label htmlFor="email" className='formlabel'>Email</label> <br />
                  <input type="email" name='email' className='input' value={credentials.email} onChange={change}/>
                  <br />
                  <label htmlFor="email" className='formlabel'>Password</label> <br />
                  <input type="password" name='password' className='input' value={credentials.password} onChange={change}/>
                  <br />

                  <button type="submit" className="btn btn-outline-primary buttonform" >Sign In</button>
                  <Link to="/signup" className="btn btn-outline-danger buttonalreadyuser" >Don't have account?signup </Link>
                  <br />
                 
              </form>
        </div>
      </div>
    )
}
