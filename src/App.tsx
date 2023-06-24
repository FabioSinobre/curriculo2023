import Routes from '../src/config/router'
import {BrowserRouter as Router} from 'react-router-dom'
import './style/index.css'



function App() {

  return (
    <><div id='conteiner_main'>
      <Router>
        <Routes/>
      </Router>
    </div>
      
    </>
  )
}

export default App
