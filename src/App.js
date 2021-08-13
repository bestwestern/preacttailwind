//@ts-check
//global var isProduction
import { h, Component } from "preact";
import DD from "./DD";
//import { Suspense, lazy } from 'preact/compat';
//import Router from "preact-router";
import navaid from "navaid";
//const navaid = require("navaid");
//const SomeComponent = lazy(() => import('./SomeComponent'));
//import { createClient } from "@supabase/supabase-js";
window.worker = new Worker("webworker.js");
const supabaseUrl = "https://jeilavzqhgggwzcgaonv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzk5MzgzNSwiZXhwIjoxOTQzNTY5ODM1fQ.w8HGZC5yfBBkP-SZOQP-Oas61vM6mq4gFb2fW8za38k";
//const supabase = createClient(supabaseUrl, supabaseKey);
var db;
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      newName: "",
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
  add = () => {
    db.from("pokemon")
      .insert([{ Name: this.state.newName }])
      .then(({ data, error }) => {
        console.log(data, error);
      });
    this.setState({ newName: "" });
  };
  componentDidMount() {
    if (isProduction) setupServiceworker();
    //
    this.router = navaid();
    // or: new Navaid();

    // Attach routes
    this.router
      .on("/", () => {
        console.log("~> /");
      })
      .on("/*", (params) => {
        console.log("~>WILD", params);
      });
    // .on("/books/*", (params) => {
    //   console.log("~> /books/*", params);
    // })
    // .on("/users/:username", (params) => {
    //   console.log("~> /users/:username", params);
    // });
    this.router.listen();
    loadJS("/supa.js", () => {
      console.log(supabase);
      db = supabase.createClient(supabaseUrl, supabaseKey);
      // const { createClient } = supabase;
      // var supabase = createClient(supabaseUrl, supabaseKey);
      // supabase
      const mySubscription = db
        .from("pokemon")
        .on("*", (payload) => {
          console.log("Change received!", payload);
          this.setState({ data: [payload.new, ...this.state.data] });
        })
        .subscribe();
      console.log(mySubscription);
      db.from("pokemon")
        .select("*")
        .then(({ data, error }) => {
          this.setState({ data });
        });
    });
  }
  render({}, { count, data, newName }) {
    return (
      <div className="bg-white-700">
        <a href="/test">gotofs_D </a>
        <br />
        <a href="/books/abc">gotofs_books </a>
        <br />
        <button onClick={(e) => this.router.route("/users/lukeed")}>
          gotouserlukee
        </button>
        <br />
        <a href="/">go_home </a>
        <h1 class="pt-36 font-bold text-4xl text-blue-700 text-center">
          Hello Tailwind CSS2
        </h1>
        <p>
          <input
            class="border-2"
            type="text"
            value={newName}
            onInput={(e) => this.setState({ newName: e.target.value })}
          ></input>
        </p>
        <strong>{data.length}</strong>
        <p>
          <button onClick={this.add}>tilføj</button>
        </p>
        {data.map((el) => (
          <p>{el.Name}</p>
        ))}
      </div>
    );
  }
}
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
const Main = () => <p>homeurl</p>;
export { App };
var loadJS = function (url, implementationCode) {
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to
  //insert the <script> element

  var scriptTag = document.createElement("script");
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  document.body.appendChild(scriptTag);
};
