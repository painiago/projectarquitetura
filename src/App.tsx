import React from 'react';
import Routes from './routes';
import { Helmet } from 'react-helmet';
import favicon from '/public/img/logo.png';

function App() {
  return (
    <>
      <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      </Helmet>
      <Routes />
    </>
  );
}

export default App;
