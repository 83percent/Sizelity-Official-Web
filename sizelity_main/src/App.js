// Module
import { createContext } from "react";
import { Switch, Route } from "react-router-dom";

// Component
import LoginRouter from './router/LoginRouter';

// Font
import './contents/fonts/Montserrat_use.css';
import './contents/fonts/NotoSans.css';

// Css
import './App.css';

// Context
export const ServerContext = createContext(null);
const __server = 'http://localhost:3001';


function App() {
  return (
    <ServerContext.Provider value={__server}>
        <Switch>
            <Route exact path="/" component={LoginRouter}/>
        </Switch>
    </ServerContext.Provider>
  );
}

export default App;
