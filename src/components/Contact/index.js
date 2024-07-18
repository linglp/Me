import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();
    const position = [42.285569, -83.745558]
    

    let DefaultIcon = Leaflet.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        shadowUrl: iconShadow
      });
      
    Leaflet.Marker.prototype.options.icon = DefaultIcon;

    const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_qmq5nxl', 'template_51fsbjg', form.current, 
        '-656h_IPbkZryPqrg')
          .then((result) => {
              console.log(result.text);
              alert("Message Sent, I'll get back to you shortly");
          }, (error) => {
              console.log(error.text);
              alert("There is an error, please try again later.");
          });
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} index={15} />
                    </h1>

                    <p> I am interested in freelance opportunities. Let's get in touch!</p>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" id="name" placeholder="Name" required/>
                                    <input type="email" name="email" id="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" id="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea type="text" name="message" id="message" placeholder="Message" required/>
                                </li>
                                <li>
                                    <button type="submit" className="flat-button" value="send">Send</button>
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>

                <div className='info-map'>
                    Lingling Peng
                    <br />
                    United States
                    <br />
                    Ann Arbor, Michigan 48104 <br />
                </div>

                <div className='map-wrap'>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "100%", float: "right"}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        Let's get in touch. Come and drink bubble tea with me!
                    </Popup>
                    </Marker>
                </MapContainer>

                </div>

                </div>

        </>
    )
}

export default Contact