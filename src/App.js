import logo from './logo.svg';
import wasmicon from './wasm.png';
import './App.css';
import hello from './hello.js'
import { useEffect, useState } from 'react';

const HelloPromise = hello({
  noInitialRun: true,
  noExitRuntime: true
})

function App() {
  const [helloModule, setHelloModule] = useState();
  useEffect(() => {
    HelloPromise.then(mod => {
      setHelloModule(mod);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex-center'>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={wasmicon} className="App-logo wasm" alt="logo" />
        </div>
        <p>
          Welcome to using react & Webassembly.
          <br />
          C to Javascript function :  {helloModule && helloModule._add(2, 3)}
        </p>
        <div className='btn-group'>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn WebAssembly
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
