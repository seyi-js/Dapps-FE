import React from 'react';
import {Switch,Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import SyncWallet from './pages/sync-wallet';
import ConnectToWallet from './pages/connect-to-wallet-connect';
import Wallet from './pages/connect-to-wallet-connect/wallet';
import Success from './pages/success'
const App = () => {
  return (
    <>

    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/syncwallet" component={SyncWallet}/>
      <Route path="/connect" component={ConnectToWallet}/>
      <Route path="/success" component={Success}/>
      <Route path="/wallet/:name" component={Wallet}/>
    </Switch>
    
      
    </>
  )
}

export default App

