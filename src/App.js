import './App.css';
import { TopBar } from '../src/Components/TopBar/TopBar';
import { SideBar } from './Components/SideBar/SideBar';
import { useState } from 'react';
import { items } from './Components/SideBar/SideBarItems';
import { dashboardItems } from './Components/Dashboard/DataItems';
import { Dashboard } from './Components/Dashboard/Dashboard';

const App = () => {

  const [text, setText] = useState("Overview");

  const handlePageClick = (page) => {
    setText(page);
  }

  return (
    <div className="App">
      <div className="flex-container">
        <SideBar items={items} onPageClick={handlePageClick}/>
        <div className="main-column">
          <TopBar text={text}/>
          <Dashboard items={dashboardItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
