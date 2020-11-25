import React, { Component } from "react";
//import './App.css';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import UpdateContent from "./components/UpdateContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mode : 'welcome',
      mode: "create",
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      subject: { title: "WEB", sub: "World Wide Web!" },
      contents: [
        { id: 0, title: "HTML", desc: "HTML is for information" },
        { id: 1, title: "CSS", desc: "CSS is for design" },
        { id: 2, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
      selected_content_id: 0,
      idx: 3,
    };
  }

  getReadContent() {
    return this.state.contents[this.state.selected_content_id];
  }

  getContent() {
    var _article,
      _content,
      _tContent = null;
    if (this.state.mode === "welcome") {
      _article = (
        <ReadContent
          title={this.state.welcome.title}
          desc={this.state.welcome.desc}
        />
      );
    } else if (this.state.mode === "read") {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={(title, desc) => {
            this.setState({
              idx: this.state.idx + 1,
              contents: Array.from(this.state.contents).concat({
                id: this.state.idx,
                title: title,
                desc: desc,
              }),
              mode: "welcome",
            });
          }}
        />
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={(title, desc) => {
            _tContent = Array.from(this.state.contents);
            for (var i in _tContent) {
              if (_tContent[i].id === _content.id) {
                _tContent[i].title = title;
                _tContent[i].desc = desc;
                break;
              }
            }
            this.setState({
              contents: _tContent,
              mode: "welcome",
            });
          }}
        />
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            const { mode } = this.state;
            if (mode === "welcome") {
              this.setState({
                mode: "read",
              });
            } else if (mode === "read") {
              this.setState({
                mode: "welcome",
              });
            }
          }}
        />
        <TOC
          data={this.state.contents}
          onChangePage={(id) => {
            this.setState({
              selected_content_id: Number(id),
            });
          }}
        />
        <Control
          onChangeMode={(_mode) => {
            if (_mode === "delete") {
              if (window.confirm("really??")) {
                var _content = this.getReadContent();
                var _tContent = Array.from(this.state.contents);
                const removeIdx = _tContent.findIndex((item) => {
                  return item === _content;
                });
                _tContent.splice(removeIdx, 1);
                this.setState({
                  contents: _tContent,
                  mode: "welcome",
                });
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
