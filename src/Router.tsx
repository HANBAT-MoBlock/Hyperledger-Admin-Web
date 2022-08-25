import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./routes/layout/login/SignIn";
import Dashboard from "./routes/layout/Dashboard";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
