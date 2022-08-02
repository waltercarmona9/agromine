import React from "react";
import "../styles/Others.css";

function Modal({ setOpenModal }) {
  const list = ["hi" , "hello", "hey"]
  const randomlist = list[Math.floor(Math.random()*list.length)];
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Task for the day</h1>
<p>{randomlist}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
