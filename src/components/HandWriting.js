import React, { useState } from "react";
import "./HandWritting.css";

const HandWriting = () => {
  const [image, setImage] = useState("");
  return (
    <div className="hand">
      <div className="hand_container">
        <img
          src="https://media.istockphoto.com/id/1187687829/vector/dyslexia-concept-vector-sign-with-stylized-letters.jpg?s=612x612&w=0&k=20&c=Z4Xm2lrWo7nED_iDMYvrLZ8YFQh1iYRoSM1quC7fwiI="
          alt=""
        />
        <h1>Detect dyslexia using Handwriting</h1>
        <p>Upload an image of handwritten letter</p>
        <input type="file" name="" id="" onChange={(event)=>setImage(event.target.files[0])}/>
        {image && <img src={URL.createObjectURL(image)} alt="" />}
        <button>Submit</button>
      </div>
    </div>
  );
};

export default HandWriting;
