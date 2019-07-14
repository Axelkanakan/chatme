import React from 'react';
import './App.css';
import Main from '../Components/Main';
import Sidebar from '../Components/SideBar';
import store from '../Store'
import _ from 'lodash'

const App = () => {
  const {contacts, user, activeUserId} = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeUserId={activeUserId}/>
  
    </div>
  );
}

export default App;
