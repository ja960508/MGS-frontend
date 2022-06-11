import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/C10/store";
import Auth from "./components/C10/Auth";
import FormUsingCookie from "./components/C11/FormUsingCookie";

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
