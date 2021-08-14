import { h, render } from "preact";
import { App } from "./App";
console.log(`${process.env.API_ROOT}awesome`);
render(<App />, document.body);
