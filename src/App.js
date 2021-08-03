//@ts-check
//global var isProduction
import { h, Component } from "preact";
import { DD } from "./DD";
window.worker = new Worker("webworker.js");

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 3,
    };
    worker.addEventListener(
      "message",
      (e) => {
        const { data } = e;
        console.log("Worker said: ", data);
        this.setState({ ...data });
      },
      false
    );
  }
  componentDidMount() {
    if (isProduction) setupServiceworker();
  }
  render({}, { count }) {
    return (
      <div className="bg-green-700">
        <h1 class="pt-36 font-bold text-4xl text-blue-700 text-center">
          Hello Tailwind CSS2
        </h1>
        <strong>{count}</strong>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <DD />
      </div>
    );
  }
}
export { App };
function setupServiceworker() {
  if ("serviceWorker" in navigator) {
    console.log("load");
    var installing = false;
    navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
      (serviceWorkerRegistration) => {
        serviceWorkerRegistration.onupdatefound = function () {
          if (!installing) console.log("shouldreload");
        };
        installing = !!serviceWorkerRegistration.installing;
      },
      (err) => {
        console.error("ServiceWorker registration failed", err);
      }
    );
  }
}
