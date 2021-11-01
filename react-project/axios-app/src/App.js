import React, { useState,useEffect } from 'react';
import { axios } from './axios';

import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Reminders</h3>
      <h3>Add Reminder</h3>
      <form>
        <label className="id">Id</label>
        <input name="id" placeholder="Id"  />
        <label className="reminder">Reminder</label>
        <input name="reminder" placeholder="Reminder"  />
        <label className="time">Time</label>
        <input name="time" placeholder="Time" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
