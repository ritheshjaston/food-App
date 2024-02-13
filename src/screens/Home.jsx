import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import '../App.css';
export default function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditems, setfooditems] = useState([]);
  const [search, setsearch] = useState('');

  const loaddata = async () => {
    let res = await fetch("http://localhost:5000/api/fooddata", {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      }
    });
    res = await res.json();
    // console.log(res[0],res[1]);
    setfooditems(res[0]);
    setfoodcat(res[1]);

  }

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <h1 className="textabovecaurosol">Anything, anytime, <br />anywhere</h1>
        {/* search */}
        <div className="searchbarz w-100">
            <nav className="navbar navbar-light w-50 ">
                <div className="container-fluid w-100" >
                    <div className="d-flex w-100">
                        <input 
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={search}
                            onChange={(e)=>{setsearch(e.target.value)}}
                        />
                        
                    </div>
                </div>
            </nav>
        </div>
      </div>
      <div>
        <Carousal />
      </div>

      <div style={{ margin: "10px" ,color:"white"}} >
        {
          (foodcat != []) ? foodcat.map((data) => {
            return (

              <div className="container" >
              <h4>{data.CategoryName}</h4>
                <div key={data._id} style={{color:"white"}} className="row mb-3">
                
                {
                  (fooditems != []) ? fooditems.filter((item)=>(item.CategoryName==data.CategoryName)&& item.name.toLowerCase().includes(search.toLowerCase())).map((fdata)=>{
                    return(<div key={fdata._id} className="col-12 col-md-6 col-lg-3 m-3">
                      <Card name={fdata.name} description={fdata.description} img={fdata.img} options={fdata.options[0]}/>
                    </div>)
                  }):""
                }
                </div>
              </div>
            );
          }) : ""
        }
        {/* <Card /> */}

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
