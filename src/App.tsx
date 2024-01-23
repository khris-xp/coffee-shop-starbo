import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <div className="xl:mx-40">
        <Hero />
      </div>
    </div>
  );
}

export default App;
