// Module
import { createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";

// Component
import LoginRouter from './router/LoginRouter';
import MainRouter from './router/MainRouter';

// Font
import './contents/fonts/Montserrat_use.css';
import './contents/fonts/NotoSans.css';
import './contents/fonts/NanumSquare.css';

// Css
import './App.css';

// Context
export const ServerContext = createContext(null);
export const UserContext = createContext(null);
const __server = 'http://localhost:3002';


function App() {
  // State
  const [user, __setUser] = useState(() => JSON.parse(sessionStorage.getItem("authSizelity")));
  function setUser(data) {
    sessionStorage.setItem("authSizelity",JSON.stringify(data)); 
    __setUser(data);
  }
  return (
    <UserContext.Provider value={{user, setUser}}>
      <ServerContext.Provider value={__server}>
          <Switch>
              <Route path="/account" component={LoginRouter}/>
              <Route path="/main" component={MainRouter}/>
          </Switch>
      </ServerContext.Provider>
    </UserContext.Provider>
  );
}

export default App;