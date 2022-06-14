import React from 'react';
import Card from './Card';
import './App.css';
import { SIDEBAR_ITEMS } from './constants';
import Box from './Box';

function App() {
  
  return (
    <div className="app">
      {
        SIDEBAR_ITEMS.map(card => <Card key={card.id} data={card}/>)
      }
      <Box/>
    </div>
  );
}

export default App;
