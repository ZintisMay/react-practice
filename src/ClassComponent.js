import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fruit: props.message,
    };
  }

  make50 = () => {
    this.state.count = 50;
    console.log(this.state.count);
  };

  make100() {
    this.state.count = 100;
    console.log(this.state.count);
  }

  componentDidMount() {
    console.log("I'm mounting");
  }

  componentDidUpdate() {
    console.log("I'm updating");
  }

  componentWillUnmount() {
    console.log("I'm leaving");
    // close any requests
    // close any socket.io or service workers
  }

  render() {
    return (
      <div style={{ border: "1px solid red" }}>
        <h1>Class Count: {this.state.count}</h1>
        <h2>
          {this.state.fruit}
          {this.props.message}
        </h2>
        <button
          onClick={() => {
            //   Set state does two things
            // it alters the state object
            // it calls the render method
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.make50();
          }}
        >
          Make50
        </button>
        <button
          onClick={() => {
            this.make100();
          }}
        >
          Make100
        </button>
      </div>
    );
  }
}

export default ClassComponent;
