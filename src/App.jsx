import { useState } from "react";
import Output from './components/Output'

function App() {

  const [user, setUser] = useState('')
  const [data, setData] = useState(null)
  const handleChange = (e) => {
    e.preventDefault()
    fetch("https://api.github.com/users/" + user)
    .then(res => res.json())
    .then(data => setData(data))
  }
  return (
    <div className="App">
        <div className="form">
        <form onSubmit={(e) => handleChange(e)}>
          <input value={user} onChange={e => setUser(e.target.value)} type="text" />
          <button type="submit">Search</button>
        </form>
        </div>
        <Output data={data}/>
    </div>
 );
}

export default App;
