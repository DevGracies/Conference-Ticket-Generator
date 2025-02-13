import { useEffect, useState } from "react";
import JsBarcode from "jsbarcode";
import ProgressSlider from "./ProgressSlider";

const About = () => {
  const [ticketData, setTicketData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ticketData")) || {};
    setTicketData(data);
  }, []);
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    if (ticketData.email) {
      JsBarcode("#barcode", ticketData.email, { format: "CODE128" });
      setBarcode(ticketData.email);
    }
  }, [ticketData.email]);

  const [page] = useState(3);
  const totalPages = 3;

  return (
    <div className="ticket">
      <div>
        <div className="selection">
          <h2>Attendee Details</h2>
          <h6>
            Step {page}/{totalPages}
          </h6>
        </div>
        <div style={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
          <ProgressSlider page={page} totalPages={totalPages} />
        </div>
        <div className="container">
          <div className="ticket-container">
            <h1 className="ticket-title">Techember Fest "25</h1>
            <p style={{ textAlign: "center" }}>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <p style={{ textAlign: "center" }}>
              📍 [Event Location] || March 15, 2025 | 7:00 PM
            </p>
          </div>
          <div className="ticket-container">
            {ticketData.image && (
              <div>
                <h3>Your Profile Photo:</h3>
                <img
                  src={ticketData.image}
                  alt="Profile"
                  style={{ width: "150px", height: "200px" }}
                />
              </div>
            )}
            <h1>Ticket Confirmation</h1>
            <p>Name: {ticketData.fullName}</p>
            <p>Email: {ticketData.email}</p>
            <h3>Your Barcode:</h3>
            <svg id="barcode" style={{ width: "100%" }}></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
