
import  React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
function App ({ children }){
  

  return (
   <>
   <Router>
    <Header />
    <Sidebar />
    </Router>
   </>
  );
}

export default App;
