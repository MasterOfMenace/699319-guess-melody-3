import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {errorsCount} = props; // eslint-disable-line react/prop-types
  return (
    <WelcomeScreen errorsCount={errorsCount}/>
  );
};

export default App;
