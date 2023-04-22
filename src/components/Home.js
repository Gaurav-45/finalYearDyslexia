import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
    const navigate=useNavigate()
  return (
    <div className="home">
      <img
        src="https://media.istockphoto.com/id/1187687829/vector/dyslexia-concept-vector-sign-with-stylized-letters.jpg?s=612x612&w=0&k=20&c=Z4Xm2lrWo7nED_iDMYvrLZ8YFQh1iYRoSM1quC7fwiI="
        alt=""
      />
      <h1>Dyslexia Detection</h1>
      <button onClick={()=>navigate("/handwritting")}>Detect Dyslexia using Handwritting</button>
      <button onClick={()=>navigate("/video")}>Detect Dyslexia using video</button>
    </div>
  );
};

export default Home;
