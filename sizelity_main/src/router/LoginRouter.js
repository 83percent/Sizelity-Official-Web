import { Switch, Route } from "react-router-dom";

import LoginComponent from '../component/login/Login';

const LoginRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginComponent}/>
        </Switch>
    )
}
export default LoginRouter;