import { Component, h } from "preact";

class DD extends Component {
  state = {
    count: 0,
  };
  click = (e) => {
    worker.postMessage({ fct: "expensive", q: "abc", time: 3000 });
  };
  expensive = ({ time = 3000 }) => {
    let start = Date.now(),
      count = 0;
    while (Date.now() - start < time) {
      count++;
    }
    this.setState({ count });
  };
  render() {
    return (
      <div>
        <span>abcedd</span>
        <br />
        <input type="text"></input>
        <span>abcedd</span>
        <br />
        <button onClick={this.click}>count in webworker</button>
        <br />
        <button onClick={this.expensive}>count in main thread</button>
        <br />
        <strong>{"thread count " + this.state.count}</strong>
        <img src="img/test.jpg"></img>
      </div>
    );
  }
}
export default DD;
