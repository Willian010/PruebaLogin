//import {Login} from './Componentes/Login';
import {useState} from "react";

function App() {
  const [errorMessages , setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const  database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username:"user2",
        password:"pass2"
    }
];

const errors = {
    uname: "invalid username",
    pass: "invalid password"
} ;
/*const handleSubmit = (event) => {
    event.preventDefault();*/

var {uname, pass} = document-forms[0];

const userData = database.find(user =>user.username === uname.value); 

if ( userData){
    if(userData.password !== pass.value){
        //invalidar password
        setErrorMessages ({ name: "pass", message:errors.pass});
    }else {
        setIsSubmitted(true);}
    }else {
        //username no found
        setErrorMessages({name: "uname", massage: errors.uname})
    };
    }


    const renderErrorMessage = (name) => 
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );
    const renderForm = (
      <div className='form'>
        <form>
          <div className='input-container'>
            <label>Username</label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className='input-container'>
            <label>Password</label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className='button-container'>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );

    const handleSubmit = (event) =>{
      event.preventDefault();
    };
  
    <form onSubmit={handleSubmit}/>


  return (
    <div className="App">

      <header className="App-header">
        <Login/>
     
        
          Ahora si Vamos a ver cuantos pares on tres botas
       
      </header>
    </div>
  );


export default App;
