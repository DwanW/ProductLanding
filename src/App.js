import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faQuestion, faGift, faUsers  } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons';;

function App() { 
  const openTab = (event, tabName) =>{
    var i, tabitems, tablinks;
    tabitems = document.getElementsByClassName("tab-items");
    for (i = 0; i < tabitems.length; i++) {
      tabitems[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }

  const dropdown = () => {
    document.getElementById("drop").classList.toggle("show")
  }

  return (
    <div className="App" id="app">
      <header className="App-header">
        <nav className="header-nav">
          <ul className="header-ul">
            <li className="drop-down-li">
              <button className="drop-down-button" id="regular" onClick={dropdown}>Browse <FontAwesomeIcon icon={faBars} /></button>
              <button className="drop-down-button" id="small" onClick={dropdown}><FontAwesomeIcon icon={faBars} /></button>
              <div className="drop-down-div" id="drop" role="menu">
                <a className="drop-down-link" href="#">Product</a>
                <a className="drop-down-link"href="#">History</a>
                <a className="drop-down-link"href="#">Our Value</a>
                <a className="drop-down-link"href="#">Special</a>
                <a className="drop-down-link"href="#">Contact</a>
                <a className="drop-down-link-s" href="#">About</a>
                <a className="drop-down-link-s" href="#">Gifts</a>
                <a className="drop-down-link-s" href="#">Help</a>
                <a className="drop-down-link-s" href="#">Get Started</a>
              </div>

            </li>
            <li className="medium">
              <a href="#"><span>About us</span></a>
            </li>
            <li className="medium">
              <a href="#"><span>Gifts</span></a>
            </li>
          </ul>
          <a  className="brand-name" href="#">Earth Spectrum</a>
          <ul className="header-ul-2">
            <li className="medium"><a href="#"><span>Help</span></a></li>
            <li><a href="#"><span>Login</span></a></li>
            <li className="medium"><a href="#"><span>Get Started</span></a></li>
          </ul>
        </nav>
      </header>
      <div className="hero-card">
        <div className="hero-img"></div>
        <div className="hero-mob-img"></div>
        <div className="hero-text">
          <div><h1 className="title-primary">Gift of Nature</h1></div>
          <div><p className="title-secondary">Crystal of Geometrical Artwork</p></div>
          <div className="start"><a className="start-button" href="#">Get Started</a></div>
        </div>
      </div>
      <div className="mid-quote">
        <div><h1 className="title-mid">A Special Gem Just for you!</h1></div>
      </div>
      <div className="tab1">
        <div className="tab-container">
          <ul>
            <li><button className="tab-links active" onClick={(e)=> openTab(e,'Ame')}>Pure Amethyst</button></li>
            <li><button className="tab-links" onClick={(e)=> openTab(e,'Dia')}>Diamond</button></li>
            <li><button className="tab-links" onClick={(e)=> openTab(e,'Eme')}>Flawless Emerald</button></li>
            <li><button className="tab-links" onClick={(e)=> openTab(e,'Obs')}>Heart Obsidian</button></li>
            <li><button className="tab-links" onClick={(e)=> openTab(e,'Rub')}>Ruby</button></li>
            <li><button className="tab-links" onClick={(e)=> openTab(e,'Top')}>Topaz</button></li>
          </ul>
        </div>
        <div className="tab-content">
          <div id="Ame" className="tab-items">
          <div className="tab-item-caption">
              <ul className="key-text">
                <li>ELEGANT</li>
                <li>FEMININE</li>
                <li>MYSTERIOUS</li>
              </ul>
                <p className="product-name">High Purity Trigonal Silicon Dioxide</p>
                <div>
                  <p className="item-origin"><span className="volcanic-text">Volcanic Origin</span></p>
                </div>
              </div>
            </div>
        </div>
        <div className="tab-content">
          <div id="Dia" className="tab-items">
          <div className="tab-item-caption">
              <ul className="key-text">
                <li>PURITY</li>
                <li>PERFECTION</li>
                <li>FAITHFULNESS</li>
              </ul>
                <p className="product-name">Pure Nature Formed Hexoctahedral Carbon</p>
                <div>
                  <p className="item-origin"><span className="orogenic-text">Orogenic Origin</span> and <span className="volcanic-text">Volcanic Origin</span></p>
                </div>
              </div>
            </div>
        </div>
        <div className="tab-content">
          <div id="Eme" className="tab-items">
          <div className="tab-item-caption">
              <ul className="key-text">
                <li>HARMONY</li>
                <li>RENEWAL</li>
                <li>GROWTH</li>
              </ul>
                <p className="product-name">Prismatic, Uncut, Transparent Hexagonal Beryl</p>
                <div>
                  <p className="item-origin"><span className="orogenic-text">Orogenic Origin</span></p>
                </div>
              </div>
            </div>
        </div>
        <div className="tab-content">
          <div id="Obs" className="tab-items">
          <div className="tab-item-caption">
              <ul className="key-text">
                <li>PROTECTION</li>
                <li>CONTENT</li>
                <li>PEACE OF MIND</li>
              </ul>
                <p className="product-name">Translucent Volcanic Glass</p>
                <div>
                  <p className="item-origin"><span className="volcanic-text">Volcanic Origin</span></p>
                </div>
              </div>
            </div>
        </div>
        <div className="tab-content">
          <div id="Rub" className="tab-items">
          <div className="tab-item-caption">
              <ul className="key-text">
                <li>PASSION</li>
                <li>COURAGE</li>
                <li>INSPIRATION</li>
              </ul>
                <p className="product-name">High Purity Hexagonal scalenohedral Aluminium Oxide with Chromium</p>
                <div>
                  <p className="item-origin"><span className="orogenic-text">Orogenic Origin</span></p>
                </div>
              </div>
            </div>
        </div>
        <div className="tab-content">
          <div id="Top" className="tab-items">
          <div className="tab-item-caption">
              <ul className="key-text">
                <li>BALANCE OF MIND</li>
                <li>INNER VITALITY</li>
                <li>SERENITY</li>
              </ul>
                <p className="product-name">Golden prismatic Dipyramidal Aluminum Silicate with Fluorine</p>
                <div>
                  <p className="item-origin"><span className="volcanic-text">Volcanic Origin</span></p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="additional-info">
        <div className="secondary-quote">
          <div><h1 className="title-mid">Forged by Millions of Years of Earth Evolution</h1></div>
        </div>
        <div className="origin">
            <div id="Vol" className="items">
            <div className="item-caption">
              <header>Volcanic</header>
                <div className="origin-description-container">
                  <p className="origin-description">Features High Degree of Temperature changes, typically ranges from 800 to 1200 degrees, where crystals form as minerals start cooling.</p>
                </div>
              </div>
            </div>
          <div id="Oro" className="items">
          <div className="item-caption">
            <header>Orogenic</header>
              <div className="origin-description-container">
                <p className="origin-description">Features High Degree of Pressure, the Pressure of orogenic process also leads to atomic structure deformation and unexpected rare mineral pathways within the earth crust.</p>
              </div>
              </div>
            </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="secondary-quote"><h1 className="title-mid">MasterCrafted, the Purest Gemstone on Earth</h1></div>
        <div className="start"><a className="start-button" href="#">Get Started</a></div>
        <div><p className="mark">Plans starting at $99.99/gem</p></div>
      </div>
      <footer>
        <div className="footer-container">
          <ul className="footer-links">
            <li className="regular-link"><a className="social" href="#">Twitter</a></li>
            <li className="regular-link"><a className="social" href="#">Facebook</a></li>
            <li className="regular-link"><a className="social" href="#">Instagram</a></li>
            <li className="mob-link"><a className="mob-social" title="Twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li className="mob-link"><a className="mob-social" title="Facebook"href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="mob-link"><a className="mob-social" title="Instagram"href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
          <ul className="footer-links">
            <li className="regular-link"><a className="social" href="#">Help & FAQ</a></li>
            <li className="regular-link"><a className="social" href="#">Redeem Gift</a></li>
            <li className="regular-link"><a className="social" href="#">We're Hiring!</a></li>
            <li className="mob-link"><a className="mob-social" title="Help"href="#"><FontAwesomeIcon icon={faQuestion} /></a></li>
            <li className="mob-link"><a className="mob-social" title="Gift"href="#"><FontAwesomeIcon icon={faGift} /></a></li>
            <li className="mob-link"><a className="mob-social" title="Join us!"href="#"><FontAwesomeIcon icon={faUsers} /></a></li>
          </ul>
          <ul className="footer-links">
            <li><a className="social" href="#">Partnership</a></li>
            <li><a className="social" href="#">Term & Privacy</a></li>
            <li><a className="social" href="#">Disclaimer</a></li>
          </ul>
        </div>
        <p className="copyright">@2020 Earth Spectrum</p>  
      </footer>
    </div>
  );
}

export default App;
