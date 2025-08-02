import {HashRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PresentationBox from './components/PresentationBox'
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';

function App() {

  return (
    <HashRouter>
    <Header/>
    
      <div className="mainContainer">
        <div className='projectContainer'>

        <Routes>
      <Route path='/' element={<Projects />} ></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/:id' element={<ProjectDetails />}></Route>
      <Route path='*' element={<h2>Not Found</h2>}></Route>
    </Routes> 

    </div>
        <div className='sideContainer'>
          <PresentationBox/>
        </div>
      </div>
    <Footer/>
      </HashRouter>
  )
}

export default App

