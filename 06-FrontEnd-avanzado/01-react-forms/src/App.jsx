
import './App.css'
import reactLogo from './assets/react.svg'
//import RefDom from './components/RefDom'
import RefLogin from './components/RefLogin'

function App() {
  return (
    <>   
      <div>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <RefLogin/>
      </div>
    </>
  )
}

export default App
