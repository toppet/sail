import moment from 'moment';
import 'moment/locale/de';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import './App.scss';

import NavBarComponent from './components/NavBar/NavBar.js';
import NewsComponent from './components/News/News.js';
import CrewComponent from './components/Crew/Crew.js';
import NewsOverlayComponent from './components/NewsOverlay/NewsOverlay.js';

import clip from './assets/images/clip.png';
import route from './assets/images/route.png';

function App() {
  moment.locale('de');

  return (
    <div className="App">

      {/* NAVBAR */}
      <NavBarComponent />

      {/* NEWS OVERLAY */}
      <NewsOverlayComponent />

      {/* HEADER SECTION */}
      <section className="header">
        <div className="header__text-wrap">
          <FontAwesomeIcon icon={faCompass} className="header__icon" />
          <h1>Lorem Ipsum Proin Gravi</h1>
          <p>LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR ALIQUET.  AENEAN SOLLICITUDIN, LOREM QUIS BIBENDUM AUCTOR.</p>
        </div>
      </section>

      {/* NEWS SECTION */}
      <NewsComponent />

      {/* ARTICLE SECTION */}
      <section className="article">
        <h2 className="headline">HEADLINE - LOREM IPSUM</h2>
        <h4 className="subtitle">SUBTITLE LOREM IPSUM</h4>
        <hr />
        <div className="paragraph-wrap">

          <div className="paragraph-wrap--left">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>

          <div className="paragraph-wrap--right">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
            <p>sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </div>
        <img className="article__image" src={clip} alt="clip" />
        <img className="article__background" src={route} alt="route" />
      </section>

      {/* CREW SECTION */}
      <CrewComponent />

      {/* FOOTER */}
      <footer>
        <p className="copyright">© 2021. Segel-Team. Alle Rechte vorbehalten</p>
        <div className="brand-icons">
          <a href="/"><FontAwesomeIcon icon={faTwitter} className="brand-icons__icon" /></a>
          <a href="/"><FontAwesomeIcon icon={faFacebookF} className="brand-icons__icon" /></a>
        </div>
        <ul className="sitemap">
          <li><a href="/">Impressum</a></li>
          <li><a href="/">Datenschutz</a></li>
          <li><a href="/">Rechtliches</a></li>
          <li><a href="/">Copyright</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
