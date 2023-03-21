import lightLogo from '../images/github-logo-dark.png'
import darkLogo from '../images/github-logo-light.png'

export default function Form({data, setData, user, setUser, dark}) {
  
    const handleChange = (e) => {
        e.preventDefault()
        fetch("https://api.github.com/users/" + user)
        .then(res => res.json())
        .then(data => setData(data))
        console.log(data);
    }
  
    return (
    <div className='formApp'>
        <img width="50" class="logo" src={dark ? lightLogo : darkLogo} alt="" />
        <div className="form">
          <form onSubmit={(e) => handleChange(e)}>
            <input placeholder="Write github username" required value={user} onChange={e => setUser(e.target.value)} type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
    </div>
  )
}
