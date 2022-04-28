import "./styles.css";
import React ,{useState} from 'react'
export default function App() {
  const [data,setData]=useState({Username:'' ,Password:''})
  const {Username,Password} =data;
  const changehandler =e =>{setData({...data,[e.target.name]:[e.target.value]})}
  const subhandler = e =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="App">
      <center>
        <form onSubmit={subhandler} >
          Enter user Id:
          <input type ="text" name="Username" value={Username} onChange={changehandler} /><br/>
          Enter Password:
          <input type ="Password" name="Password" value={Password} onChange={changehandler}/><br/>

          <input type ="submit"/>

          </form>

        
        
      </center>
    </div>
  );
}
