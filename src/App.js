import Test from './components/Test';
import { useState } from 'react';
import Show from './components/Show';

// let product = {
  
// }

function App() {

  let handleChange = (e) => {
    setProduct(e.target.value)
  }

  let [product, setProduct] = useState("")
  return (
    <div className="App">
      <h1>Hello</h1>
      <Test coba="coba aja" paraf="lorem ipsum dolor sit"/>
      <input type="text" onChange={handleChange}/>
      <br></br>
      <Show product={product}/>
    </div>
  );
}

export default App;
