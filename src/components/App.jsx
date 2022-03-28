import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveyPassword from '../containers/RecoveryPassword';
import '../styles/global.scss';

const App = () => {
  return ( 
    <Layout>
      <Login />
      <RecoveyPassword />
    </Layout>
  );
}

export default App;