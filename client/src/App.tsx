import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cities } from './components/Cities';
import { EventsList } from './components/EventsList';
import { Event } from './components/Event';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cities />} />
          <Route path="city/:city_id" element={<EventsList />} />
          <Route path="event/:event_id" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
