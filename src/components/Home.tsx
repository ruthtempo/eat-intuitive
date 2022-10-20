import "animate.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import intueative from "../intueative_lon.png";
import subtitle from "../untertitel.svg";

export function Home() {
  const navigate = useNavigate();
  const navigateToScale = () => {
    navigate("/scale");
  };

  const [pulse, setPulse] = useState(0);

  return (
    <div className=" my-2 d-flex flex-column justify-content-between text-center">
      <img
        src={intueative}
        alt="logo"
        onClick={() => setPulse(1)}
        onAnimationEnd={() => setPulse(0)}
        className={`w-100 ${pulse ? "animate__animated animate__pulse" : ""}`}
      />
      <img src={subtitle} alt="subtitle" />
      <Button onClick={navigateToScale} className="bg-primary text-white mt-4">
        Let's check with my Hunger
      </Button>
    </div>
  );
}
