import React from 'react';
import './DropDownList.css';

export const DropDownList = ({ data, onItemSelect }) => {

    const handleClick = ({ target }) => {
        const item = target.id;
        onItemSelect(item);
    }

   return (
   <div className="container">
        <ul className="list">
            {data.map((item, i) => (
                <li key={i} id={item} className="list-item" onClick={handleClick}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
   )
}