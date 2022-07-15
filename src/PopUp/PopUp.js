import React, { useState, useEffect } from "react";
import "./PopUp.css";

const closePopup = (props) => {
  setTimeout(() => {
    props.setTrigger(false);
  }, 3000);
};

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {closePopup}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
