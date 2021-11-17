import React from 'react';
import './SideBar.css';
import InsertChartIcon from '@mui/icons-material/InsertChart';

export const SideBar = ({ items = [], onPageClick }) => {

    const handleClick = ({ target }) => {
        console.log(target.getAttribute('id'));
        //onPageClick(items[target.id].value);
    }

    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <InsertChartIcon fontSize="large" color="primary"/>
                <h3>Data Dashboard</h3>
                <div className="pro-div">
                    <span className="pro">PRO</span>
                </div>
            </div>

            <div className="sidebar-title">
                <h6 className="pages">PAGES</h6>
            </div>
            <div className="items-wrapper">
                <ul className="pages">
                {Object.keys(items).map((item, i) => (
                <li key={i} id={item} className="page" onClick={handleClick}>
                    <div className="page-content">
                        {items[item].img}
                        <h3>{items[item].value}</h3>
                    </div>
                </li>
                ))}
                </ul>
            </div>
        </div>
    )
}