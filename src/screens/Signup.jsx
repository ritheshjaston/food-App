import React, { useState } from 'react'
import '../my.css'
import { Link, useNavigate  } from 'react-router-dom' 
export default function Signup() {
  const [credentials, setcredentials]=useState({name:"",email:"",password:"",geolocation:""});
  const navigate = useNavigate();
  const handlesubmit= async(e)=>{
      e.preventDefault();
      const response=await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
          'Content-type':'Application/json'
        },
        body:JSON.stringify({
          name:credentials.name,
          email:credentials.email,
          password:credentials.password,
          location:credentials.geolocation
        })
    })
    const json = await response.json();
    console.log(json);

    if(!json.success){
      alert("Enter valid credentials");
    }else{
      navigate('/login');
    }
  }
  const change=(event)=>[
    setcredentials({...credentials,[event.target.name]:event.target.value})
  ]
  return (
    <div>
      <div className="signupmain container">
        <h2>Sign Up | Food App</h2>
        <br />
        <br />
            <form onSubmit={handlesubmit}>
                <label htmlFor="email" className='formlabel'>Email</label> <br />
                <input type="email" name='email' className='input' value={credentials.email} onChange={change}/>
                <br />
                <label htmlFor="email" className='formlabel'>Password</label> <br />
                <input type="password" name='password' className='input' value={credentials.password} onChange={change}/>
                <br />
                <label htmlFor="name" className='formlabel'>Name</label> <br />
                <input type="text" name='name' className='input' value={credentials.name} onChange={change}/>
                <br />
                <label htmlFor="location" className='formlabel'>Location</label> <br />
                <input type="text" name='geolocation' className='input' value={credentials.geolocation} onChange={change}/>
                <button type="submit" className="btn btn-outline-primary buttonform">Signup now</button>
                <br />
                <Link to="/login" className="btn btn-outline-danger buttonalreadyuser" >Already a user</Link>
                <br />
               
            </form>
      </div>
    </div>
  )
}
