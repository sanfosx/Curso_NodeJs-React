import {
  useFirebaseApp
} from 'reactfire'


function App() {

  const firebase= useFirebaseApp()

  console.log(firebase)
  return (
    <div className="App">
     <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
