import React from "react";
import "../css/Contact.css";
import Label from '../components/Label';
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Contact = () => {
  return (
    <>
      <div className="page3">
        <div className="content3">
          <Label Label="Contact" />
          <Form formNextClass="ContactForm" sideClassName="contactAside" sideContent={
            <>
              <h1>Contact <span>Details</span></h1>
              <div className="contact-details">
                <p><i className="ri-user-3-line"></i> &nbsp;Abdul-Rehman</p>
                <p><i className="ri-phone-fill"></i> &nbsp;+92 3227904989</p>
                <p><i className="ri-mail-open-line"></i> &nbsp;disclaimerface@gmail.com</p>
                <p><i className="ri-map-pin-2-line"></i> &nbsp;Lahore, Pakistan</p>
              </div>
              <div style={{ height: "50vh", width: '100%', zIndex: '1' }}>
                <MapContainer
                  center={[31.519052, 74.313339]}
                  zoom={10}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>
            </>
          } />
        </div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Contact;