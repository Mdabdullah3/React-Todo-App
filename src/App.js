import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AddTask from './Components/AddTask';

const App = () => {
  return (
    <div className='w-11/12 mx-auto font-mono'>
      <Navbar />
      <Banner />
      <AddTask />
    </div>
  );
};

export default App;