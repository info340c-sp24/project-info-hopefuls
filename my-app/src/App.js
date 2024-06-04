// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './UserContext';

import Signin from './Signin';
import Landing from './Landing';
import Createwo from './createwo';
import SearchWorkouts from './search';
import Schedule from './schedule';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Create_page.html" element={<Createwo />} />
          <Route path="/search.html" element={<SearchWorkouts />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
