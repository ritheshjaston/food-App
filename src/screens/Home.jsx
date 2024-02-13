import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Searchbar from "../components/Searchbar";
import '../App.css';
export default function Home() {
    const [foodcat,setfoodcat]=useState([]);
    const [fooditems,setfooditems]=useState([]);

    const loaddata= async ()=>{
      let res=await fetch("http://localhost:5000/api/fooddata",{
        method:'POST',
          headers:{
            'Content-type':'Application/json'
          }
      });
      res=await res.json();
      console.log(res[0],res[1]);
    }

    useEffect(()=>{
      loaddata();
    },[]);

  return (
    <div>
      <div>
        <Navbar />
        <h1 className="textabovecaurosol">Anything, anytime, <br />anywhere</h1>
        <Searchbar />
      </div>
      <div>
        <Carousal/>
      </div>

      <div style={{display: "flex",margin:"10px"}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
