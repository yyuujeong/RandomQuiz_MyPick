import * as React from "react";
import './styles/app.scss';
import 'normalize.css';
import Home from './components/Home';
import blurrySvg from "./assets/blurry.svg";
import claymojiSvg from "./assets/claymoji.svg";
import arrowSvg from "./assets/arrow.svg";

const App: React.FC = () => {
  return (
    <div>
      <Home
      blurrySvg={blurrySvg}
      claymojiSvg={claymojiSvg}
      arrowSvg={arrowSvg}
      />
    </div>
  );
}

export default App;