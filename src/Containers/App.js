import React from 'react';
import './App.css';
import Main from '../Components/Main';
import Sidebar from '../Components/SideBar';
import store from '../Store'
import _ from 'lodash'

const App = () => {
  const {contacts, user} = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user}/>
  
    </div>
  );
}

export default App;
