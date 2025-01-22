// single selection
import React, { useState } from "react";
import "./style.css";
import data from "./data";

const Accordian = () => {

  console.log(typeof useState);
  const [selected, setSelected] = useState(null);
  //console.log(selected);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    //setSelected(getCurrentId === selected ? arrowIndi = "-" : arrowIndi = "+" );
    console.log(selected);
  };
  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <div key={dataItem.id} className="item">
                <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>{selected === dataItem.id ? "-" : "+"}</span>
                </div>
                {selected === dataItem.id ? <div className="details">{dataItem.answer}</div> : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Accordian;
