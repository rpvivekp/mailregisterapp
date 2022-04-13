import React from 'react';
import './App.css';

function App() {
 

  function handleForm()
{
    const name=document.getElementById("uname").value;
    const pass=document.getElementById("upass").value;
    <div>
      <div>{name.length<5 ?  alert("Name must be  5 character long"):null}</div>  
      <div>{document.getElementById("uemail").value !== /^[a-zA-Z0-9]+@+[a-zA-Z]+.+[A-z]/ ?  alert("Email is not valid"):null}</div> 
      <div>{pass.length<8 ?  alert("Password must be 8 character long"):null}</div> 
    </div>
}

  return (
    <div className="container">
      <h1 className="heading">Register Here!!!</h1>
      <table>
        <tr>
          <td>Name:</td>
          <td>
            <input type="text" id="uname"></input>
          </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>
            <input type="email" id="uemail"></input>
          </td>
        </tr>
        <tr>
          <td>Password:</td>
          <td>
            <input type="password" id="upass"></input>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={handleForm}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
