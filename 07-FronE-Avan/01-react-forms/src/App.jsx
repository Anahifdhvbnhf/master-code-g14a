
import reactLogo from './assets/react.svg'
import './App.css'
//import RefDom from './components/RefDom'
//import RefLogin from './components/RefLogin'
import SimpleForm from './components/SimpleForm'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <SimpleForm/>
      </div>
    </>
  )
}

export default App
