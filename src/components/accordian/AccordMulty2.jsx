import React, { useState } from "react";

import data from "./data";
import "./Accord.css";

const AccordMulty2 = () => {
  const [faqs, setFaqs] = useState(data);
  const [seleId, setSelId] = useState([]);
  /* const handleClick = (itemId) => {
    setSelId((prev) => (seleId !== itemId ? itemId : null));
    console.log(seleId);
  }; */
  const handleMultySelect = (id) => {
    setSelId((prev) => {
      return prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
    });
    console.log(id);
  };
  return (
    <div className="wrapper">
      <div className="accord">
        {faqs.length > 0 ? (
          faqs.map((item) => {
            return (
              <div key={item.id} className="item">
                <div
                  className="title"
                  onClick={() => handleMultySelect(item.id)}
                >
                  <h2>{item.question}</h2>
                  <span>{seleId.includes(item.id) ? "-" : "+"}</span>
                </div>
                <div
                  className={`answer ${seleId.includes(item.id) ? "open" : ""}`}
                >
                  {seleId.includes(item.id) && <p>{item.answer}</p>}
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Item found!</h3>
        )}
      </div>
    </div>
  );
};

export default AccordMulty2;
