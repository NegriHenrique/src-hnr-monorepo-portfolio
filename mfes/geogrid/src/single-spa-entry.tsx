import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorBoundary(err: any, info: any, props: any) {
    return <div>Erro: {err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
