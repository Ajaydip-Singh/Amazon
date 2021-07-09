import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazon
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
