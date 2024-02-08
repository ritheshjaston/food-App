import React from 'react'
import img1 from '../Images/128805.jpg'
import img2 from '../Images/2150741761.jpg'
import img3 from '../Images/2150777769.jpg'
import img4 from '../Images/5038.jpg'
import '../App.css';

export default function Carousal() {
    return (
        <div id="carouselExampleControls" className="carousel slide bgsend " data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
