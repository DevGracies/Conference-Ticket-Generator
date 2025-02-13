import { useState } from "react";
import "../App.css";
import ProgressSlider from "./ProgressSlider";

function TiccketSelection() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const [page, setPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="ticket">
      <div>
        <div className="selection">
          <h2>Ticket Selection</h2>
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
            <h4>Select Ticket Type:</h4>
            <div className="ticket-options">
              <div
                className={`ticket-option ${
                  selectedTicket === "free" ? "active" : ""
                }`}
                onClick={() => setSelectedTicket("free")}
              >
                Free <br /> <small>Regular Access</small>
                <p>20/52</p>
              </div>
              <div
                className={`ticket-option ${
                  selectedTicket === "vip" ? "active" : ""
                }`}
                onClick={() => setSelectedTicket("vip")}
              >
                $150 <br /> <small>VIP Access</small>
                <p>20/52</p>
              </div>
              <div
                className={`ticket-option ${
                  selectedTicket === "vip" ? "active" : ""
                }`}
                onClick={() => setSelectedTicket("vip")}
              >
                $150 <br /> <small>VVIP Access</small>
                <p>20/52</p>
              </div>
            </div>
            <div className="ticket-quantity">
              <label>Number of Tickets:</label>
              <input
                type="number"
                min="1"
                value={ticketCount}
                onChange={(e) => setTicketCount(e.target.value)}
              />
            </div>
            <div className="buttons">
              <button className="submit-button next"> Next </button>
              <button className="submit-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiccketSelection;
