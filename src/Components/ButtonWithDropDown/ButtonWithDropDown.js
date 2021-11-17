import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import { DropDownList } from '../DropDownList/DropDownList';
import './ButtonWithDropDown.css';

const sampleData = ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Last Month"];
const date = new Date();
const month = date.toLocaleString('en-US', { month: 'long'});
const day = date.getDate();

export const ButtonWithDropDown = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState(`Today: ${month}, ${day}`);
    const drop = useRef(null);

    const handleClick = ({target}) => {
        if(!target.closest(`.${drop.current.className}`) && open){
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    const handleItemSelect = (item) => {
        const displayText = item === "Today" ? `Today: ${month}, ${day}` : item;
        setText(displayText);
    }

    return (
        <div className="buttonComponent" ref={drop}>
            <Button 
            onClick={() => setOpen(open => !open)}
            text={text}/>     
            {open && <DropDownList data={sampleData} onItemSelect={handleItemSelect}/>}
        </div>
    )
}