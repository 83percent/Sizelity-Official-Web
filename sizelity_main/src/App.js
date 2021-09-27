// Module
import { createContext } from "react";

// Router Componnet
import MainRouter from './router/MainRouter';

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
    </ServerContext.Provider>
  );
}

export default App;