import './styles/globals.css'
import './styles/Navbar.css'
import './styles/Hero.css'
import './styles/About.css'
import './styles/Projects.css'
import './styles/Papers.css'
import './styles/Links.css'
import './styles/Footer.css'

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Projects     from './components/Projects'
import Papers       from './components/Papers'
import Links        from './components/Links'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Papers />
        <Links />
      </main>
      <div style={{ position: 'relative', zIndex: 1 }}><Footer /></div>
    </>
  )
}
