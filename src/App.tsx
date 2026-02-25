import Hero from './components/Hero';
import LiveEvents from './components/LiveEvents';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import EventCTA from './components/EventCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <EventCTA />
      <LiveEvents />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
