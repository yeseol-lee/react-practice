import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: "WEB",
        sub: "World Wide WEB STATE...",
      },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };

    console.log("this.state.contents: ", this.state.contents);
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <Subject title="React" sub="sub FOR UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTMLporps"
          desc="HTML is HyperText Markup Language. test"
        ></Content>
      </div>
    );
  }
}

export default App;
