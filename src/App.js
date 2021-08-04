//@ts-check
//global var isProduction
import { h, Component } from "preact";
import DD from "./DD";
import { createClient } from "@supabase/supabase-js";
window.worker = new Worker("webworker.js");
const supabaseUrl = "https://jeilavzqhgggwzcgaonv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzk5MzgzNSwiZXhwIjoxOTQzNTY5ODM1fQ.w8HGZC5yfBBkP-SZOQP-Oas61vM6mq4gFb2fW8za38k";
const supabase = createClient(supabaseUrl, supabaseKey);
var worker = new Worker("webworker.js");
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
    // supabase
    //   .from("pokemon")
    //   .insert([{ Name: "T-rex" }])
    //   .then(({ data, error }) => {
    //     console.log(data, error);
    //   });
    supabase
      .from("pokemon")
      .select("*")
      .then(({ data, error }) => {
        this.setState({ data });
      });
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
