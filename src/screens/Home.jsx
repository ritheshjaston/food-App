import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import '../App.css';
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <h1 className="textabovecaurosol">Anything, anytime, <br />anywhere</h1>
        
      </div>
      <div>
        <Carousal/>
      </div>

      <div>
        <Card/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
