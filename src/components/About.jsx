import { useEffect, useState } from "react";
import JsBarcode from "jsbarcode";
import ProgressSlider from "./ProgressSlider";
import { FaCloudUploadAlt } from "react-icons/fa";

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
          <div>
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
            <svg id="barcode"></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
