//@ts-check
//global var isProduction
import { h } from "preact";
import { DD } from "./DD";
console.log("app");
export const App = () => {
  console.log("render");
  return (
    <div className="bg-green-700">
      <h1 class="pt-36 font-bold text-4xl text-blue-700 text-center">
        Hello Tailwind CSS
      </h1>
      <DD />
    </div>
  );
};
