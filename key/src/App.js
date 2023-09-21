import React from 'react';
import MyListComponent from './MyListComponent';

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>My List</h1>
      <MyListComponent items={items} />
    </div>
  );
};

export default App;
