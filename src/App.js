import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

const App = () => {
  return (
    <div className='w-11/12 mx-auto font-mono'>
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;