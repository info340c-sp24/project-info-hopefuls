import React from 'react';

import ReactDOM from "react-dom";
import Signin from './Signin';
import Landing from './Landing';
<<<<<<< HEAD
import Schedule from './schdeule';
=======
import Createwo from './createwo';
import SearchWorkouts from './search';
>>>>>>> 8e8260afb4526bd28c1929f2d8f1ff7acdf5c2a5
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Landing></Landing>}></Route>
        <Route path = "/signin" element={<Signin></Signin>}></Route>
<<<<<<< HEAD
        <Route path = "/schdeule" element={<Schedule></Schedule>}></Route>
=======
        <Route path = "/Create_page.html" element={<Createwo></Createwo>}></Route>
        <Route path = "/search.html" element={<SearchWorkouts />}></Route>
>>>>>>> 8e8260afb4526bd28c1929f2d8f1ff7acdf5c2a5
      </Routes>
    </Router>
  );
}

export default App;
