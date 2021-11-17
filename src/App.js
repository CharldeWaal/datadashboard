import './App.css';
import { TopBar } from '../src/Components/TopBar/TopBar';
import { SideBar } from './Components/SideBar/SideBar';
import { useState } from 'react';
import { items } from './Components/SideBar/SideBarItems'

const App = () => {

  const [text, setText] = useState("Overview");

  const handlePageClick = (page) => {
    setText(page);
  }

  return (
    <div className="App">
      <div className="flex-container">
        <SideBar items={items} onPageClick={handlePageClick}/>
        <div className="col">
          <TopBar text={text}/>
          <div className="home">Home Page</div>
        </div>
      </div>
    </div>
  );
}

export default App;
