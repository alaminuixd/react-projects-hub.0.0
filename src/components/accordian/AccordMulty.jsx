import React, { useEffect, useState } from "react";
import "./Accord.css";
import data from "./data";

const AccordMulty = () => {
  const [faqs, setFaqs] = useState(data);
  const [openFaqIds, setOpenFaqIds] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  const handleToggle = (id) => {
    setOpenFaqIds((prev) => {
      return prev.includes(id)
        ? prev.filter((faqId) => faqId !== id)
        : [...prev, id];
    });
  };

  useEffect(() => {
    console.log("openFaqIds: ", openFaqIds);
  }, [openFaqIds]);

  return (
    <div className="wrapper">
      <div className="accord">
        {faqs.length > 0 ? (
          faqs.map((item) => (
            <div key={item.id} className="item">
              <div className="title" onClick={() => handleToggle(item.id)}>
                <h3>{item.question}</h3>
                <span>{openFaqIds.includes(item.id) ? "-" : "+"}</span>
              </div>
              <div
                className={`answer ${
                  openFaqIds.includes(item.id) ? "open" : ""
                }`}
              >
                {openFaqIds.includes(item.id) && <p>{item.answer}</p>}
              </div>
            </div>
          ))
        ) : (
          <p>No FAQs are available</p>
        )}
      </div>
    </div>
  );
};

export default AccordMulty;
