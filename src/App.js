import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LanguageProvider from "./contexts/LanguageContext";
import RoomsProvider from "./contexts/RoomsContext";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Excurisons from "./pages/Excurisons";
import CheckOut from "./pages/CheckOut";
import SingleRoom from "./pages/SingleRoom";
import Page404 from "./pages/Page404";

function App() {
  return (
    <LanguageProvider>
      <RoomsProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:id" component={SingleRoom} />
            <Route exact path="/excursions" component={Excurisons} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/check-out" component={CheckOut} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Router>
      </RoomsProvider>
    </LanguageProvider>
  );
}

export default App;
