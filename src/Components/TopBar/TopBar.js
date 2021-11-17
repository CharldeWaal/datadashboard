import React from 'react';
import './TopBar.css';
import { ButtonWithDropDown } from '../ButtonWithDropDown/ButtonWithDropDown';


export const TopBar = ({ text }) => {
    return (
        <div className="topbar">
            <div className="topBarWrapper">
                <div className="left">
                    <h3 className="text">{text}</h3> 
                </div>
                <div className="right">
                    <ButtonWithDropDown />
                </div>
            </div>
        </div>
    )
}