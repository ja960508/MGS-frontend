import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/C10/store";
import Auth from "./components/C10/Auth";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Auth />
      </Provider>
    </>
  );
};

export default App;
