import React from 'react';

import ReactDOM from "react-dom";
import Signin from './Signin';
import Landing from './Landing';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Landing></Landing>}></Route>
        <Route path = "/signin" element={<Signin></Signin>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
