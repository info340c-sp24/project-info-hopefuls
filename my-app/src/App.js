import React from 'react';

import ReactDOM from "react-dom";
import Signin from './Signin';
import Landing from './Landing';
import Createwo from './Createwo';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Landing></Landing>}></Route>
        <Route path = "/signin" element={<Signin></Signin>}></Route>
        <Route path = "/Create_page.html" element={<Createwo></Createwo>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
