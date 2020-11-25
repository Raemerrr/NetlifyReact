import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    return !(this.props.data === newProps.data);
  }

  render() {
    var lists = [];
    for (var i in this.props.data) {
      var item = this.props.data[i];
      lists.push(
        <li key={item.id}>
          <a
            href={"/contens/" + item.id}
            data-id={item.id}
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
            {item.title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}
export default TOC;
