import { LifeCycles, registerApplication, start } from "single-spa";

declare const System: {
  import: (module: string) => Promise<unknown>;
  [key: string]: unknown;
};

function domGetter(containerId: string) {
  return () => document.getElementById(containerId)!;
}

registerApplication({
  name: "geogrid",
  app: () =>
    System.import("http://localhost:3001/geogrid.js") as Promise<
      LifeCycles<{ domElementGetter: () => HTMLElement }>
    >,
  activeWhen: ["/geogrid"],
  customProps: {
    domElementGetter: domGetter("geogrid-container"),
  },
});
registerApplication({
  name: "bg-remover",
  app: () =>
    System.import("http://localhost:3002/bgremover.js") as Promise<
      LifeCycles<{ domElementGetter: () => HTMLElement }>
    >,
  activeWhen: ["/bg-remover"],
  customProps: {
    domElementGetter: domGetter("bg-remover-container"),
  },
});
registerApplication({
  name: "focus",
  app: () =>
    System.import("http://localhost:3003/focus.js") as Promise<
      LifeCycles<{ domElementGetter: () => HTMLElement }>
    >,
  activeWhen: ["/focus"],
  customProps: {
    domElementGetter: domGetter("focus-container"),
  },
});

start();
