import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Searchbar from "../components/Searchbar";
import '../App.css';
export default function Home() {
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
