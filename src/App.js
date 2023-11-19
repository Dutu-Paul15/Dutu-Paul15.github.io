import React from "react";

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/login/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailsPages1} from "./pages/details/DetailsPages1";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";
import { Contact } from "./pages/contact/Contact";
import DarkMode from "./components/DarkMode/DarkMode";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <DarkMode />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/details/:id" component={DetailsPages1} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
