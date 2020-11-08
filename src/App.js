import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';




function App() {
  return (
    <div >
   {/**
      passing props make sense but still a bit confuse how primary works without a value
   */}
     <Button primary bgColor="purple">Login</Button>
    
    </div>
  );
}

export default App;
