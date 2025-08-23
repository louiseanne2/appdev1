import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About Me</h1>
      <p><strong>Name:</strong> Louise Anne Bechayda</p>
      <p><strong>Course/Year:</strong> BS Information System 3rd Year</p>
      <p><strong>Fun Fact:</strong> I can cook one dish only</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Why I Want to Learn React?</h2>
      <p>
        I want to learn react because it allows the developers to build a modern and engaging web applications effectively.
        React is a powerful library for building user interfaces. 
        Learning React will help me to create a user-friendly and interactive web applications compared to traditional web development methods.
        Additionally, I want to learn React because of its efficiency and simplicity which makes dyanamic user interfaces easier to develop and maintain.
      </p>
    </div>
  );
}

export default App
