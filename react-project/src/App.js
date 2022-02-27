import React from "react";
import { Routes , Route} from "react-router-dom";
import {NAVBAR_ROUTE} from "./routes/constants";
import Main from "./layout/Main/index";

export default function App() {

  return (
      <Routes >
          <Main>
              {
                  NAVBAR_ROUTE.map(({path,component}) => (
                      <Route exact path={path} component={component} />
                  ))
              }
          </Main>
      </Routes >
  )
};