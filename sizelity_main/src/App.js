// Module
import { createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";

// Router Componnet
import LoginRouter from './router/LoginRouter';
import ShopRouter from './router/ShopRouter';
import MainRouter from './router/MainRouter';

// Font
import './contents/fonts/Montserrat_use.css';
import './contents/fonts/AppleSDGothicNeo.css';

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
              {/* <Route path="/main" component={MainRouter}/> */}
              <Route path={["/","/main"]} component={MainRouter}/>
              <Route path="/account/:id" component={LoginRouter}/>
              <Route path="/shop" component={ShopRouter}/>
          </Switch>
      </ServerContext.Provider>
    </UserContext.Provider>
  );
}

export default App;