import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "./ToggleButton.css";

const ToggleButton = ({ onText, offText }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className="toggle-container">
      <div
        className={`toggle-button ${isOn ? "on" : "off"}`}
        onClick={handleToggle}
      >
        <div className={`slider ${isOn ? "on" : "off"}`}></div>
        <span className="label">{isOn ? onText : offText}</span>
      </div>
    </div>
  );
};

// PropTypes validation
ToggleButton.propTypes = {
  onText: PropTypes.string.isRequired,
  offText: PropTypes.string.isRequired,
};

export default ToggleButton;
