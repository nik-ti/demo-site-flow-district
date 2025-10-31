import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Showcase />
      <Footer />
      <a
        href="https://simple-flow.co"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full backdrop-blur-md shadow-lg hover:bg-white/20 hover:shadow-white/30 hover:scale-105 transition-all"
      >
        Built by Simple Flow
      </a>
    </div>
  );
}

export default App;
