import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

import { Name } from './index';
import { Conditional } from "./components/Conditional";
import { Button } from "./components/Button";

interface AppProps {
  url?: string;
}

export const App: FC<AppProps> = ({ url = "https://reactjs.org/docs/react-api.html" }) => {
  const onClick = (name: Name) => { window.myCall(name); }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Conditional />
        <a href={url}>React API</a>
        <Button onClick={onClick} label="My Button" name="Alan" />
      </header>
    </div>
  );
}