//import logo from './logo.svg';
import './App.css';
import User from './comps/User';


function App() {
  return (
    <div className="App">
      
      <User numeroCita= "1" libro= "Kafka en la orilla"/>
      <User numeroCita= "2" libro= "Tokio Blues"/>
      <User numeroCita= "3" libro= "Sputnik, mi amor"/>

    </div>
  );
}

export default App;
