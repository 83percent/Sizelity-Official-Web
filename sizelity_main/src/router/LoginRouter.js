import { Switch, Route } from "react-router-dom";

import LoginComponent from '../component/login/Login';
import CreateAccountComponent from '../component/login/CreateAccount';

// CSS
import '../contents/css/login/LoginRouter.css';

const LoginRouter = () => {
    return (
        <Switch>
            <Route exact path="/account" component={LoginComponent}/>
            <Route exact path="/account/create" component={CreateAccountComponent}/>
            <Route exact path="/account/:id" component={LoginComponent}/>
        </Switch>
    )
}
export default LoginRouter;