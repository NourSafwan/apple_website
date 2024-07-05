import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
    </main>
  );
};
export default App;
