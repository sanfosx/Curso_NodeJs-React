
import Alarma from './components/alarma';
import Calculadora from './components/calculadora';

function App() {

  const alarmar =(hora)=>{

    if (hora <= 7){
      alert("Sigue duermiendo")
    }else alert("despierta ya")
  }
  return (
    <div className="App">
      <Calculadora  a={54} b={32}/>
      <Alarma  alarmar = {alarmar}/>
    </div>
  );
}

export default App;
