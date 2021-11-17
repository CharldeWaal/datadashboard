import React from 'react';
import './SideBar.css';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { dashboardItems } from '../Dashboard/DataItems';

export const SideBar = ({ items = [], onPageClick }) => {

    const handleClick = ({ target }) => {
        console.log(target.getAttribute('id'));
        //onPageClick(items[target.id].value);
    }

    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <InsertChartIcon fontSize="large" color="primary"/>
                <h1 className="app-title">Data Dashboard</h1>
                <div className="pro-div">
                    <span className="pro">PRO</span>
                </div>
            </div>
            <div className="pages-wrapper">
                <h6 className="pages-header">PAGES</h6>
                <ul className="pages">
                {Object.keys(items).map((item, i) => (
                <li key={i} id={item} className="page" onClick={handleClick}>
                    <div className="page-content">
                        <div className="page-items">
                        {items[item].img}
                        <h3 className="page-title">{items[item].value}</h3>
                        </div>
                    </div>
                </li>
                ))}
                </ul>
            </div>
            <div className="autorization-container">
                
            </div>
            <div className="footer">
                <h6>Created by C. de Waal <span>&copy;</span> {new Date().getFullYear()}</h6>
            </div>
        </div>
    )
}