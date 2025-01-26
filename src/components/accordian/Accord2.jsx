import React, { useState } from "react";
import data from "./data";

const Accord2 = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleSingleSelection = (itemId) => {
    setSelectedId((prev) => {
      return prev === itemId ? null : itemId;
    });
  };
  return (
    <div className="wrapper">
      <div className="accord">
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div key={item.id} className="item">
                <div
                  className="title"
                  onClick={() => handleSingleSelection(item.id)}
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                <div
                  className={`answer ${selectedId === item.id ? "open" : ""}`}
                >
                  {item.id === selectedId ? item.answer : null}
                  {console.log("itemID:", item.id)}
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Data found</h3>
        )}
      </div>
    </div>
  );
};

export default Accord2;
