// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import Show from './components/Show';
function App() {
  const [list, setList] = useState([]);

  const sendData = (data) => {
    // console.log(data);
    setList([...list, data]);
  }





  // console.log(list)

  return (
    <div className="App">

      <div className="left">
        <Form sendData={sendData} />
      </div>
      <div className="right">
        <Show list={list} />
      </div>
    </div>
  );
}

export default App;
