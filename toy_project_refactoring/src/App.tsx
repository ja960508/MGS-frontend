import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Account from "./components/Account/Account";
import Loading from "./components/commons/Loading";

function App({ service }: { service: any }) {
  const [loading, setLoading] = useState<boolean>(false);
  const handleLoading = (flag: boolean) => {
    setLoading(flag);
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Account handleLoading={handleLoading} service={service} />}
        />
        <Route
          path='/:id'
          element={<Account handleLoading={handleLoading} service={service} />}
        />
      </Routes>
      {loading && <Loading />}
    </div>
  );
}

export default App;
