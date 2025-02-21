import { assest } from "../assets";
import { FaArrowRight } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#0E464F",
            borderRadius: "20%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={assest.icon}
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <img
          src={assest.ticz}
          alt="ticz"
          style={{ width: "50px", height: "20px" }}
        />
      </div>
      <ul>
        <li>
          <Link to="/">Event</Link>
        </li>
        <li>
          <Link to="/ticket">My Ticket</Link>
        </li>
        <li>
          <Link to="/about">About Project</Link>
        </li>
      </ul>
      <a href="#ticket-container" style={{textDecoration: "none"}}>
        <button style={{ display: "flex", alignItems: "center" }}>
          My ticket <FaArrowRight style={{ width: "20px" }} />
        </button>
      </a>
    </div>
  );
};

export default Navigation;
