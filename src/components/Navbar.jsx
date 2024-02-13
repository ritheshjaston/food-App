import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../App.css';
export default function Navbar() {
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("UserId");
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark w-100" style={{ "position": "absolute", "z-index": "1" }}>
            <div className="container-fluid">
                <Link className="applogo" to="/">Food App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {
                            localStorage.getItem("UserId") ? <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">My Orders</Link>
                            </li> : ""
                        }

                    </ul>
                    {localStorage.getItem("UserId") ?
                        <div className='d-flex'>
                            <li className="nav-item">
                                <Link className="btn bg-success ml-2 " to="/">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn bg-danger" onClick={logout}>Log Out</button>
                            </li>
                        </div>
                        :
                        <div className='d-flex'>
                            <li className="nav-item">
                                <Link className="btn bg-white ml-2" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn bg-success" to="/signup">Sign Up</Link>
                            </li>
                        </div>
                    }

                </div>
            </div>
        </nav>
    )
}
