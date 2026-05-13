import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>

      <h1>A simple Counter</h1>
      <h2>Yes just a simple counter</h2>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>

    </div>
  )
}

export default App