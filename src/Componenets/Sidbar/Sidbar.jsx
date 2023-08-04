import React, { useState } from "react";
import plusIcon from "../../Componenets/Sidbar/kisspng-.jpg";
import "./Sidbar.css";




const Sidbar = (props) => {
  const color = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd ", "#e4ee91 "];

  const [listOpen, setlistOpen] = useState(false)



  return (
    <div className="Sidbar">
      <img src={plusIcon} alt="add" onClick={() => setlistOpen(!listOpen)} />
      <ul className={`sidbar-list ${listOpen ? "sidbar-list_active" : ""}`} >
        {color.map((item, index) => (
          <li
            key={index}
            className="sidbar-list-item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidbar;
