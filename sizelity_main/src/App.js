// Module
import { createContext } from "react";
import { Switch, Route } from "react-router-dom";

// Router Componnet
import MainRouter from './router/MainRouter';
import TermsRouter from './router/TermsRouter';

// Font
import './contents/fonts/Montserrat_use.css';
import './contents/fonts/AppleSDGothicNeo.css';

// Css
import './App.css';
import ScrollToTop from "./router/ScrollTop";

// Context
export const ServerContext = createContext(null);
//const __server = 'http://localhost:3002';
const __server = 'https://server.sizelity.com';

function App() {
  return (
    <ServerContext.Provider value={__server}>
        <ScrollToTop />
        <MainRouter />
        {/* <Switch>
            <Route exact path="/terms/:cate" component={TermsRouter} />
            <Route path="/" component={MainRouter}/>
        </Switch> */}
    </ServerContext.Provider>
  );
}

export default App;