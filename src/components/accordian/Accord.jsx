import React, { useState } from 'react';
import data from './data';
import './Accord.css';

const Accord = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accord">
      <button className='btn-enable'>Enable Multy Selections</button>
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div className="item" key={dataItem.id}>
              <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              <div className={`answer ${selected === dataItem.id ? 'open' : ''}`}>
                {selected === dataItem.id ? dataItem.answer : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accord;
