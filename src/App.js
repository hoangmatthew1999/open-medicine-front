import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import test from './test.png'
function App() {
  const styleObject = {width: 300, borderColor: 'green', height: 500}
  return (
    <div class="card" style={styleObject}>   
        <img class="card-img-top" src={test} alt="Card image cap"></img> 
          <h5 class="card-title">Card title</h5>
    </div>
  );
}

export default App;
