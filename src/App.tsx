import Routes from '../src/config/router'
import {BrowserRouter as Router} from 'react-router-dom'
import './style/index.css'

import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {

  return (
    <><div id='conteiner_main'>
      <Router>
        <Header/>
        <Routes/>
        <Footer/>
      </Router>
    </div>
      
    </>
  )
}

export default App
