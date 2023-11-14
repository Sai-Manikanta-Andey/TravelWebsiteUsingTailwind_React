import Activities from "./components/Activities"
import Booking from "./components/Booking"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TopBox from "./components/TopBox"

function App() {
 

  return (
    <div className="App">
      <TopBox/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App
