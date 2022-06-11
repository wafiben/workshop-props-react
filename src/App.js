import "./App.css";
import List from "./Components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const users = [
    { name: "amin", email: "amin@gmail.com" },
    { name: "loay", email: "loay@gmail.com" },
    {name:"brahim",email:"brahim@gmail.com"},
    {name:"karim",email:"karim@gmail.com"}
  ];

  return (
    <div>
      <List users={users} />
    </div>
  );
}

export default App;
