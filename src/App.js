import logo from './logo.svg';
import './App.css';
import { Body1 } from './component/mobile';
import { Logo,Links,Button } from './component/navbar'
function App() {
  return (
    <div>
      <div id='navbar'>
        <Logo/>
        <Links/>
        <Button/>
      </div>

      <Body1/>
    </div>
     
       
     
  
  );
}

export default App;
