import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppType } from '../../server/src/index'
import { hc } from 'hono/client'

const client = hc<AppType>('http://0.0.0.0:8787')

function App() {
  useEffect(() => {
    const res = async() => {
      const res = await client.hello.$get({
        query: {
          name: "narikake"
        }
      })
    }
    res()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
