import { useState } from "react";
import { MdOutlineNightlightRound } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import Output from './components/Output'
import Form from "./components/Form";

function App() {

  const [user, setUser] = useState('')
  const [data, setData] = useState(false)
  const [dark, setDark] = useState(false)

  const toggleMode = () => {
    setDark(!dark)
  }
  
  return (
    <div className={!dark ? "App" : "App dark"}>
        <Form dark={dark} user={user} setData={setData} setUser={setUser} data={data}/>
        {!data.message && <Output dark={dark} data={data}/>}
        {data.message && <p className="notFound">Not found any accounts</p>}
        <div className="mode">
          <MdOutlineNightlightRound fontSize={'25px'} color={dark && "white"} className="modeIcon" style={!dark && {display: 'none'}} onClick={toggleMode} />
          <BsSun fontSize={'25px'} className="modeIcon" style={dark && {display: 'none'}} onClick={toggleMode}/>
        </div>
    </div>
 );
}

export default App;
