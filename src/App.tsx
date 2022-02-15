import "./App.css";
import "./fontello/css/fontello.css";
import { GlobalStyle } from "./GlobalStyle.styled";
import { BrowserRouter } from "react-router-dom";
import Main from "./containers/Main";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
