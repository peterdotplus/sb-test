import './App.css';
import './grids-responsive-min.css';

import Header from './features/header/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1-2"> ... </div>
        <div class="pure-u-1 pure-u-md-1-2"> ... </div>
    </div>
    </div>
  );
}

export default App;
