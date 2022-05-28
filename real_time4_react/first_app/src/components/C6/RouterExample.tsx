import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <Link to='hello/5'>Hello</Link>
    </div>
  );
};

const Hello = () => {
  console.log(useParams());
  return (
    <div>
      Hello
      <Link to='/'>main</Link>
    </div>
  );
};

const RouterExample = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/hello/:id' element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
