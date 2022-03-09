import logo from './logo.svg';
import './App.css';
import { Form } from './Components/Form';
import { Doctor_Details } from './Components/Doctor_details';
import { Doctor } from './Components/Doctors';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='welcome'>WELCOME...</div>
     <Form />
    </div>
  );
}

export default App;
