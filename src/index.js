import { h, render } from "preact";
import { App } from "./App";
if (isProduction)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      console.log("load");
      navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
        function (registration) {
          registration.onupdatefound = () => {
            console.log("updatefound"); //RELOAD!!
            alert("reload!");
            location.reload();
          };
          console.log("ServiceWorker registration", registration);
        },
        (err) => {
          console.error("ServiceWorker registration failed", err);
        }
      );
    });
  }
render(<App />, document.body);
