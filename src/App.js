//@ts-check
//global var isProduction
import { h, Component } from "preact";
import { DD } from "./DD";
var worker = new Worker("webworker.js");
worker.addEventListener(
  "message",
  function (e) {
    console.log("Worker said: ", e.data);
  },
  false
);
worker.postMessage("Hello World");
class App extends Component {
  componentDidMount() {
    if (isProduction)
      if ("serviceWorker" in navigator) {
        console.log("load");
        var installing = false;
        navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
          (serviceWorkerRegistration) => {
            serviceWorkerRegistration.onupdatefound = function () {
              console.log("updatefound");
              if (!installing) console.log("shouldreload");
            };
            var serviceWorker;
            if (serviceWorkerRegistration.installing) {
              serviceWorker = serviceWorkerRegistration.installing;
              installing = true;
              document.querySelector("#kind").textContent = "installing";
            } else if (serviceWorkerRegistration.waiting) {
              serviceWorker = serviceWorkerRegistration.waiting;
              document.querySelector("#kind").textContent = "waiting";
            } else if (serviceWorkerRegistration.active) {
              serviceWorker = serviceWorkerRegistration.active;
              document.querySelector("#kind").textContent = "active";
            }

            if (serviceWorker) {
              console.log(serviceWorker.state);
              serviceWorker.addEventListener("statechange", function (e) {
                console.log(e.target.state);
              });
            }
            // registration.onupdatefound = () => {
            //   console.log("updatefound"); //RELOAD!!
            //   alert("reload!");
            //   location.reload();
            // };
            // console.log("ServiceWorker registration", registration);
          },
          (err) => {
            console.error("ServiceWorker registration failed", err);
          }
        );
      }
  }
  render() {
    console.log("render");
    return (
      <div className="bg-green-700">
        <h1 class="pt-36 font-bold text-4xl text-blue-700 text-center">
          Hello Tailwind CSS2
        </h1>
        <strong id="kind"></strong>
        <DD />
      </div>
    );
  }
}
export { App };
// export const App = () => {
//   console.log("render");
//   return (
//     <div className="bg-green-700">
//       <h1 class="pt-36 font-bold text-4xl text-blue-700 text-center">
//         Hello Tailwind CSS
//       </h1>
//       <DD />
//     </div>
//   );
// };
