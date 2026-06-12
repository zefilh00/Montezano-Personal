import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TrainingBanner from "./components/TrainingBanner";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <Services />
      <TrainingBanner />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;