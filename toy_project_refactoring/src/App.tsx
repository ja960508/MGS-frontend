import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account/Account";

function App({ service }: { service: any }) {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Account service={service} />} />
        <Route path='/:id' element={<Account service={service} />} />
      </Routes>
    </div>
  );
}

export default App;
