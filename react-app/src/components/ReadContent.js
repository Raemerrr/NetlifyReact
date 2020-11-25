import React, { Component } from "react";

class ReadContent extends Component {
  static defaultProps = {
    title: "HTML",
    desc: "HTML is HyperText Markup Language.",
  };
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;
