import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';

import Header from './features/header/Header'
import BlogpostsList from './features/blogposts/BlogpostsList';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
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

function Blog() {
  return (
    <div className="App">
      <Header />
      <div className="pure-g">
        <div className="pure-u-1"><BlogpostsList /></div>
    </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
