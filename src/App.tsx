import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import LiveEvents from './components/LiveEvents';
import Pricing from './components/Pricing';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Advisors from './components/Advisors';
import EventCTA from './components/EventCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <EventCTA />
      <LiveEvents />
      <Pricing />
      <About />
      <Team />
      <Advisors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
