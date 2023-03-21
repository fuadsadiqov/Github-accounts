import { useState } from "react";
import Output from './components/Output'

function App() {

  const [user, setUser] = useState('')
  const [data, setData] = useState(false)
  const handleChange = (e) => {
    e.preventDefault()
    fetch("https://api.github.com/users/" + user)
    .then(res => res.json())
    .then(data => setData(data))
    console.log(data);
  }
  return (
    <div className="App">
          <img width="50" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
        <div className="form">
          <form onSubmit={(e) => handleChange(e)}>
            <input placeholder="Write github username" required value={user} onChange={e => setUser(e.target.value)} type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
        {!data.message && <Output data={data}/>}
        {data.message && <p className="notFound">Not found any accounts</p>}
    </div>
 );
}

export default App;
