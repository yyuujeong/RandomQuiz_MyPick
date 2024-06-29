import * as React from "react";
import "../styles/components/home.scss";

interface HomeSvg {
  blurrySvg: string;
  claymojiSvg: string;
  arrowSvg: string;
}

const Home: React.FC<HomeSvg> = ({ blurrySvg, claymojiSvg, arrowSvg }) => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <p>RandomQuiz</p>
        <p className="home-title">MyPick</p>
        <img src={blurrySvg} alt="svg" className="svg-blurry" />
        <img src={claymojiSvg} alt="svg" className="svg-claymoji" />
        <img src={arrowSvg} alt="svg" className="svg-arrow" />
      </div>

      <div className="home-account">
        <button>카카오톡회원가입</button>
        <button>카카오톡로그인</button>
      </div>
    </div>
  );
};

export default Home;
