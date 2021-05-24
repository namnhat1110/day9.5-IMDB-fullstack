import { Route, Switch } from "react-router-dom";

import "./App.css";

import { HomePage, LoginPage, AuthPage, UpdateUserPage, FourOhFourPage, CreateMoviePage } from "./pages";

import { ProtectedRoute } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/login`} component={LoginPage} />
        <Route exact path={`/register`} component={AuthPage} />
        <ProtectedRoute exact path={`/edit/:id`} component={UpdateUserPage} />
        <ProtectedRoute exact path={"/"} component={HomePage} />
        <ProtectedRoute exact path={`/create`} component={CreateMoviePage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
