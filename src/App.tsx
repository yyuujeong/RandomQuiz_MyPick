import * as React from "react";
import './styles/main.scss';
import 'normalize.css';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <Home/>
    </div>
  );
}

export default App;