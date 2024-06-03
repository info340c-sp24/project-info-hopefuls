import React from 'react';

import ReactDOM from "react-dom";
import Signin from './Signin';
import Landing from './Landing';
import Createwo from './Createwo';
import SearchWorkouts from './search';
import Schedule from './schedule';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Landing></Landing>}></Route>
        <Route path = "/signin" element={<Signin></Signin>}></Route>
        <Route path = "/Create_page.html" element={<Createwo></Createwo>}></Route>
        <Route path = "/search.html" element={<SearchWorkouts />}></Route>
        <Route path = "/schedule" element={<Schedule />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
