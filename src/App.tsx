"use client"

import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>JNT Bill Web</h1>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </p>
      </header>
    </div>
  )
}

export default App
