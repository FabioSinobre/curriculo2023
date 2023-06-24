import {
    Routes,
    Route
} from 'react-router-dom'

import Home from '../pages/home/Home'
import Summary01 from '../components/Article/Executive/summary_01'
import Summary02 from '../components/Article/Executive/summary_02'
import Fotos from '../components/Gallery/gallery'
import Project from '../components/Project/project'
import Zelador from '../components/Section/Works/Zelador/zelador'
import TCC from '../components/Section/Works/Tcc/tcc'

import Architecture from '../components/courses/Architecture/architecture'
import ApacheCamel from '../components/courses/Apache_camel/apacheCamel'
import BdMysql from '../components/courses/BD_SQL/bd_sql'
import ReactFirebase from '../components/courses/React_firebase/react_firebase'
import Scrum from '../components/courses/scrum/scrum'
import WhiteBelt from '../components/courses/White_Belt/white_belt'
import GreenBelt from '../components/courses/Green_belt/green_belt'
import Camera from '../components/Article/Executive/camera/camera'

function MainRotes(){
    return(
        <Routes>
            <Route path='*' element={<Home/>} />
            <Route path='/sumariocurto' element={<Summary01/>} />
            <Route path='/sumariolongo' element={<Summary02/>} />
            <Route path='/fotos' element={<Fotos/>} />
            <Route path='/projetos' element={<Project/>} />
            <Route path='/architectere' element={<Architecture/>} />
            <Route path='/whiteBalt' element={<WhiteBelt/>} />
            <Route path='/GreenBelt' element={<GreenBelt />} />
            <Route path='/scrum' element={<Scrum />} />
            <Route path='/reactFarebase' element={<ReactFirebase/>} />
            <Route path='/apacheCamel' element={<ApacheCamel/>} />
            <Route path='/bancoSql' element={<BdMysql/>} />
            <Route path='/zelador' element={<Zelador/>} />
            <Route path='/tcc' element={<TCC/>} />
            <Route path='/cameraimg' element={<Camera/>} />
            
 
        </Routes>
       
    )
}

export default MainRotes