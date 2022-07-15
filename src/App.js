import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { RenderBody } from "./Todos/Todos";
import { Posts } from "./Posts/Posts";
import { themes } from "./theme";
import PopUp from "./PopUp/PopUp";

function App() {
  const [themeState, setThemeState] = useState(themes.light);
  const [context, setContext] = useState(React.createContext(themes.light));
  const theme = useContext(context);

  const [Popup, setPopup] = useState(false);

  const DarkTheme = () => {
    setContext(React.createContext(themes.dark));
    setThemeState(themes.dark);
    setPopup(true);
  };
  const LightTheme = () => {
    setContext(React.createContext(themes.light));
    setThemeState(themes.light);
    setPopup(true);
  };

  useEffect(() => {
    <context.Provider value={themeState}>
      {(document.body.style.backgroundColor = theme.background)}
      {(document.querySelector("#postTable").style.color = theme.foreground)}
      {(document.querySelector("#todoTable").style.color = theme.foreground)}
    </context.Provider>;
  });

  function displayTodos() {
    document.querySelector("#todoTable").hidden = false;
    document.querySelector("#postTable").hidden = true;
  }

  function displayPosts() {
    document.querySelector("#todoTable").hidden = true;
    document.querySelector("#postTable").hidden = false;
  }

  return (
    <div className="container">
      <button onClick={displayTodos} className="btn btn-primary button">
        Todo List
      </button>
      <button onClick={displayPosts} className="btn btn-info button">
        Post List
      </button>

      <button onClick={LightTheme} className="btn btn-light button">
        light theme
      </button>

      <button onClick={DarkTheme} className="btn btn-dark button">
        dark theme
      </button>

      <RenderBody url="https://jsonplaceholder.typicode.com/todos" />
      <Posts url="https://jsonplaceholder.typicode.com/posts" />

      <PopUp trigger={Popup} setTrigger={setPopup}>
        <p>The Theme has been Changed</p>
      </PopUp>
    </div>
  );
}

export default App;
