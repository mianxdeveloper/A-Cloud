import React from "react";
import "../css/About.css";
import Label from "../components/Label";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";


const About = ()=>{
   return(
    <>
     <div className="page4">
        <div className="content4">
           <Label Label="About" />

        </div>
        <Subscribe />
        <Footer />
     </div>
    </>
   );
}

export default About;