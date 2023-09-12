import './App.css'
import { About, Blog, Clients, Contact, CTA, Footer, Gallery, Hero, Newsletter, Services, Stats, Teams } from "./components";

const App = () => (

  <div className='bg-[#131616]'>
    <Hero />
    <About />
    <Stats />
    <CTA />
    <Teams />
    <Clients />
    <Services />
    <Gallery />
    <Blog />
    <Newsletter />
    <Contact />
    <Footer />
  </div>
);

export default App
