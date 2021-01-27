import './App.css';
import {Layout as Login} from './pages/login/index'
import {Layout as Equipment} from './pages/equipment/index'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import {
  setStorage,
  getStorage,
  removeStorage,
} from './utils/storage'


function renderUI(){
  let token = getStorage('token');

  if(token){
    return (
      <div>
        <Equipment/>
      </div>
    )
  }else{
    return <Login/>
  }
}

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          {
            renderUI()
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
