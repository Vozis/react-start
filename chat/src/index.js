import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MessageList } from "./components";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageClassList: [],
      author: "",
      text: "",
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClassSubmit = (event) => {
    event.preventDefault();
  };

  addMessage = () => {
    const message = {
      author: this.state.author,
      text: this.state.text,
    };

    this.setState({
      messageClassList: [...this.state.messageClassList, message],
    });
    this.setState({
      author: "",
      text: "",
    });
  };

  render() {
    return (
      <div>
        <h3>ClassComponent</h3>
        <form className={"flex gap-4"} onSubmit={this.handleClassSubmit}>
          <input
            className={"input"}
            placeholder={"Author..."}
            value={this.state.author}
            onChange={this.handleInputChange}
            name="author"
          />
          <input
            className={"input"}
            placeholder={"text..."}
            value={this.state.text}
            onChange={this.handleInputChange}
            name="text"
          />
          <button className={"btn btn-primary"} onClick={this.addMessage}>
            Добавить в список
          </button>
        </form>
        <hr />
        <div>
          <h3>Список сообщений</h3>
          <ul>
            {this.state.messageClassList.map((message, index) => (
              <li key={index}>
                <p>Author: {message.author}</p>
                <p>Content: {message.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function FunctionComponent() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    author: "",
    text: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (name) => (event) => {
    setError("");
    setMessage((message) => ({ ...message, [name]: event.target.value }));
  };

  const addMessageToList = () => {
    if (message.author && message.text) {
      setMessageList([...messageList, message]);
      setMessage({ author: "", text: "" });
    } else {
      setError("Поля не должны быть пустыми ");
    }
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    setTimeout(() => {
      setMessageList([...messageList]);
    }, 1500);
    if (messageList.length) {
    }

    const responseInterval = setTimeout(() => {}, 1500);

    return () => {
      clearTimeout(responseInterval);
    };
  }, [messageList]);

  return (
    <div>
      <h3>FunctionComponent</h3>
      {/*<pre>{JSON.stringify(messageList, null, 2)}</pre>*/}
      <form className={"flex gap-4"} onSubmit={handleSubmit}>
        <input
          className={"input"}
          placeholder={"Author..."}
          value={message.author}
          onChange={handleChange("author")}
          name="author"
        />
        <input
          className={"input"}
          placeholder={"text..."}
          value={message.text}
          onChange={handleChange("text")}
          name="text"
        />
        <button
          className={"btn btn-primary btn-send"}
          onClick={addMessageToList}
        >
          Добавить в список
        </button>
        <span>{error}</span>
      </form>
      <hr />
      <div>
        <h3>Список сообщений</h3>
        <ul>
          {messageList.map((message, index) => (
            <li key={index}>
              <p>Author: {message.author}</p>
              <p>Content: {message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="container">
      <h1>Main title</h1>
      <hr />
      <MessageList />
      <hr />
      <ClassComponent />
      <hr />
      <FunctionComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
