import { useState } from 'react'
import  ContactList  from './components/ContactList.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ContactList />
      </div>
    </>
  )
}

export default App
