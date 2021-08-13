import { h, Component } from "preact";
class Test extends Component {
  state = {
    c: 2,
  };
  render({}, { c }) {
    return (
      <div>
        <p>TEST1abc</p>
        <button
          style={{ border: "1px solid" }}
          onClick={(e) => this.setState({ c: c + 1 })}
        >
          {c}
        </button>
      </div>
    );
  }
}
export { Test };
