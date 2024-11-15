import './App.css'
import {PrimeReactProvider} from "primereact/api";
import Header from "./components/header/Header.tsx";
import Body from "./components/body/Body.tsx";

function App() {

  return (
    <>
        <PrimeReactProvider>
            <Header></Header>
            <Body></Body>
        </PrimeReactProvider>
    </>
  )
}

export default App