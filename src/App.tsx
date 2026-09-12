import Navbar from './components/Navbar'
import SignalLine from './components/SignalLine'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <SignalLine />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
