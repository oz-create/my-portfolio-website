import './App.css'
import Aurora from './components/Aurora'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Education from './components/Education';

function App() {

  return (
    <div className='relative w-full overflow-x-hidden'>
      <div className='w-full h-screen fixed top-0'>
        <Aurora 
          colorStops={["#4D7DFE", "#7C5DA0","#311565"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <Navbar />
    <div className='w-full flex flex-col justify-center items-center gap-20' style={{paddingTop: '8rem', paddingBottom: '4rem'}}>
      <Header />
      <About />
      <Skills />
      <Experiences />
      <Education />
    </div>
    
    </div>
  )
}

export default App
