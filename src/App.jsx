
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      {/* <Workflow /> */}
      <Pricing />
      <Footer />
    </div>
  )
}

export default App;