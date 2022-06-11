import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";

function App() {
  const user = "louay";
  const age = 32;
  const person = { name: "yassin", adress: "tunis" };
  const sayHello=(x)=>{
     alert(x)
  }
  return (
    <div>
      <List user={user} age={age} person={person}  sayHello={sayHello}/>
    </div>
  );
}

export default App;
