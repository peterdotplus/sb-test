import './App.css';
import './grids-responsive-min.css';

import Header from './features/header/Header'
import BlogpostsList from './features/blogposts/BlogpostsList';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-2"> ... </div>
        <div className="pure-u-1 pure-u-md-1-2"><BlogpostsList /></div>
    </div>
    </div>
  );
}

export default App;
