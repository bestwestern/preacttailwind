import { h } from "preact";

export const DD = () => {
  const click = (e) => {
    worker.postMessage({ fct: "expensive", q: "abc", time: 3000 });
  };
  return (
    <div>
      <span>abcedd</span>
      <button onClick={click}>click</button>
      <img src="img/test.jpg"></img>
    </div>
  );
};
